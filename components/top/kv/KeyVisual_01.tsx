// components/kv/KeyVisual_01.tsx

"use client";

import FirstViewContent from "@/components/top/kv/FirstViewContent";
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_01";
import KeyVisualContent from "@/components/top/kv/KeyVisualContent";
import ScrollButton from "@/components/ui/button/ScrollButton";
import MoreLinkButton from "@/components/ui/button/MoreButton";

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="relative h-[980px]">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-full" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full md:max-w-[1240px] px-5">
          <TopPageHeadline
            mainTitle={
              <>
                <span className="">確実、迅速。<br />
                信頼を運ぶ<br className="md:hidden"/>軽貨物エキスパート。</span>
              </>
            }
            description={
              <>
                <span className="">
                スポット便からルート配送まで、<br className="md:hidden"/>お客様の多様なニーズに<br className="md:hidden"/>きめ細かく対応。<br />
                安心・安全を最優先に、<br className="md:hidden"/>お客様の大切な荷物を<br className="md:hidden"/>責任を持ってお届けします。
                </span>
              </>
            }
            className="  text-white "
          />
          {/* <div className="mt-[58px]">
            <ScrollButton color="white" />
          </div> */}
        </div>
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_01;
