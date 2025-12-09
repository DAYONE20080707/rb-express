// components/news/newsDetail/BlogDetail_01.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow";
import { Cms } from "@/types";
import { newsFetch } from "@/lib/api/newsFetch";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

const BlogDetail_01 = ({ params }: BlogDetailProps) => {
  const { id } = params;
  const [post, setPost] = useState<Cms | null>(null);
  const [prevPost, setPrevPost] = useState<Cms | null>(null);
  const [nextPost, setNextPost] = useState<Cms | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 記事取得
        const currentPost = await newsFetch.get(id);
        if (!mounted) return;

        if (!currentPost) {
          setError("記事が見つかりませんでした");
          return;
        }

        setPost(currentPost);

        // 全記事取得（publishedAt順）
        const allPosts = await newsFetch.list(100);
        if (!mounted) return;

        const sorted = allPosts.sort(
          (a, b) =>
            new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime()
        );

        const index = sorted.findIndex((p) => p.id === id);
        setPrevPost(index > 0 ? sorted[index - 1] : null);
        setNextPost(index < sorted.length - 1 ? sorted[index + 1] : null);
      } catch (err) {
        console.error("Failed to fetch news post:", err);
        if (mounted) {
          setError("記事の取得に失敗しました");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <div className="bg-bgLight">
      <div className="max-w-[1200px] mx-auto py-16 md:pt-20 md:pb-[120px] px-4">
        {loading ? (
          <p className="text-baseColor">読み込み中...</p>
        ) : error || !post ? (
          <p className="text-baseColor">
            {error || "記事が見つかりませんでした"}
          </p>
        ) : (
          <article className="news-content">
            <h1 className="text-3xl md:text-[32px] leading-[180%] font-semibold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.category) && post.category.length > 0 ? (
                  post.category.map((cat, i) => (
                    <span
                      key={i}
                      className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                    カテゴリーなし
                  </span>
                )}
              </div>
              {post.date && (
                <time className="text-base">
                  {new Date(post.date)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </time>
              )}
            </div>

            {post.image && (
              <div className="w-full h-[400px] md:h-[586px] relative mb-20">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div
              className="prose max-w-none prose-headings:font-bold prose-h2:text-[24px] prose-h2:mb-6 prose-h2:mt-12 prose-h2:font-medium prose-h2:leading-[160%] prose-h2:text-accentColor prose-h2:font-noto prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-p:leading-relaxed prose-p:text-base prose-li:text-base prose-li:leading-relaxed prose-ul:mt-4 prose-ul:mb-6 prose-ul:pl-6 prose-ol:mt-4 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:marker:text-accentColor prose-ul:marker:text-[8px]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* 前後記事ナビ */}
            {/* <nav className="mt-24 border-t border-b border-black py-4">
            <div className="flex justify-between items-center relative">
              {prevPost ? (
                <Link
                  href={`/news/${prevPost.id}`}
                  className="group flex items-center text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
                >
                  <NavigationArrow
                    direction="left"
                    className="text-accentColor"
                  />
                  <div>
                    <p className="text-base mb-1 font-bold font-lato">PREV</p>
                    <p className="text-lg font-semibold line-clamp-2">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="w-[calc(50%-20px)]" />
              )}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>

              {nextPost ? (
                <Link
                  href={`/news/${nextPost.id}`}
                  className="group flex items-center justify-end text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
                >
                  <div className="text-left">
                    <p className="text-base mb-1 font-bold font-lato">NEXT</p>
                    <p className="text-lg font-semibold line-clamp-2">
                      {nextPost.title}
                    </p>
                  </div>
                  <NavigationArrow
                    direction="right"
                    className="text-accentColor"
                  />
                </Link>
              ) : (
                <div className="w-[calc(50%-20px)]" />
              )}
            </div>
          </nav> */}
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetail_01;
