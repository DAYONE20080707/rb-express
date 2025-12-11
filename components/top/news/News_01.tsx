// components/blog/News_01.tsx
"use client";

import { useState, useEffect } from "react";
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";
import { newsFetch } from "@/lib/api/newsFetch";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import SectionContent from "@/components/ui/frame/SectionContent";

interface NewsProps {
  limit?: number;
}

const News_01 = ({ limit = 3 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 旧データ取得処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      }
      setLoading(false)
    }
    getWorks()
    */

    // 新データ取得処理（共通化）
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await newsFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (mounted) setContents([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [limit]);

  return (
    <SectionContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto md:space-y-10">
        <ContentHeadline subTitle="News" mainTitle="最新情報をお届けします" />
        {loading ? (
          <p className="text-baseColor">読み込み中...</p>
        ) : !contents || contents.length === 0 ? (
          <p className="text-baseColor">記事がありません</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {contents.slice(0, 6).map((post, index) => (
              <div
                key={post.id}
                className="flex gap-4 md:gap-6 py-4 border-b border-borderLight"
              >
                <div className="w-1/2 md:w-full flex-shrink-0 overflow-hidden md:max-w-[180px]">
                  <Image
                    src={post.image?.url || "/common/noimage.jpg"}
                    alt={post.title ?? "ブログサムネイル"}
                    width={180}
                    height={130}
                    className="w-full h-full object-cover aspect-[180/130]"
                  />
                </div>
                <div className="w-1/2 md:w-full flex-1 flex flex-col justify-start">
                  <p className="text-accentLight text-sm md:text-sm mb-2 font-en">
                    {post.date
                      ? format(new Date(post.date), "yyyy.MM.dd", {
                          locale: ja,
                        })
                      : ""}
                  </p>
                  <p className="text-baseColor font-normal text-sm md:text-base leading-[160%] line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className="flex justify-center mt-16">
          <MoreButton className="text-accentColor border-accentColor" />
        </div> */}
      </section>
    </SectionContent>
  );
};

export default News_01;
