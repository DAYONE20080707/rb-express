// components/recruit/recruit/LowerNews_01.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cms } from "@/types";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";
import { blogsFetch } from "@/lib/api/blogsFetch";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import SectionContent from "@/components/ui/frame/SectionContent";

interface RecruitProps {
  limit?: number;
}

const Recruit_01 = ({ limit = 3 }: RecruitProps) => {
  const [allContents, setAllContents] = useState<Cms[]>([]);
  const [displayContents, setDisplayContents] = useState<Cms[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  // 全件取得してカテゴリ抽出
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await blogsFetch.list(100); // 全件取得
        if (!mounted) return;
        setAllContents(data);

        // カテゴリー抽出（重複除去）
        const uniqueCats = new Set<string>();
        data.forEach((post) => {
          post.category?.forEach((c) => uniqueCats.add(c));
        });

        setCategories([
          { id: "all", name: "すべて" },
          ...Array.from(uniqueCats).map((c) => ({ id: c, name: c })),
        ]);

        // 初期表示はlimit分だけ
        setDisplayContents(data.slice(0, limit));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (mounted) {
          setAllContents([]);
          setCategories([{ id: "all", name: "すべて" }]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [limit]);

  // カテゴリ変更時の絞り込み
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayContents(allContents.slice(0, limit));
    } else {
      const filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      );
      setDisplayContents(filtered.slice(0, limit));
    }
  }, [activeCategory, allContents, limit]);

  return (
    <SectionContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリボタン */}
        {/* <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-20 rounded-full bg-white mx-auto px-5 md:px-20 w-fit">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-1 py-4 transition-all font-bold whitespace-nowrap ${
                activeCategory === category.id
                  ? "text-accentColor border-b-4 border-accentColor"
                  : "hover:text-accentColor"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div> */}
        <h2 className="text-xl md:text-[32px] font-semibold leading-[180%]">
          軽貨物ドライバー募集
        </h2>

        <div className="mt-10 md:mt-16 bg-white p-4 md:p-16">
          {loading ? (
            <p className="text-baseColor">読み込み中...</p>
          ) : displayContents.length === 0 ? (
            <p className="text-baseColor">記事がありません</p>
          ) : (
            <div className="space-y-6">
              {displayContents.map((post) => (
                <Link
                  key={post.id}
                  href={`/recruit/${post.id}`}
                  className="flex flex-col md:flex-row gap-4 md:gap-10 hover:opacity-90 transition-opacity pb-6 border-b border-accentColor last:border-b-0"
                >
                  <div className="flex-shrink-0 w-[180px] h-[130px] overflow-hidden">
                    {post.image && (
                      <Image
                        src={post.image.url}
                        alt={post.title ?? "記事サムネイル"}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-sm md:text-base font-en whitespace-nowrap font-extrabold">
                      {post.date
                        ? format(new Date(post.date), "yyyy.MM.dd", {
                            locale: ja,
                          })
                        : ""}
                    </p>
                    {post.category?.map((cat, index) => (
                      <span
                        key={index}
                        className="mt-2 block text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1 w-fit"
                      >
                        {cat}
                      </span>
                    ))}
                    <p className="mt-4 text-baseColor font-normal text-base md:text-lg mb-2 leading-[160%]">
                      {post.title}
                    </p>
                    {/* <p className="text-baseColor text-sm md:text-base line-clamp-2">
                      {post.content?.replace(/<[^>]*>/g, "").substring(0, 100)}
                    </p> */}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {!loading && displayContents.length > 0 && (
          <div className="mt-10 md:mt-16 text-baseColor leading-[250%]">
            <p>
              その他掲載していない案件もございますので、Contactからお問い合わせください。
            </p>
          </div>
        )}
      </section>
    </SectionContent>
  );
};

export default Recruit_01;
