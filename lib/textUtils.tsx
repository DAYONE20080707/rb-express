import React from "react";

/**
 * 文字列内の改行文字(\n)を<br />タグに変換するReactコンポーネントを返す
 * @param text - 改行を含む文字列
 * @returns React.ReactNode
 */
export function formatTextWithLineBreaks(text: React.ReactNode): React.ReactNode {
  if (typeof text === "string") {
    return text.split("\n").map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i !== arr.length - 1 && <br />}
      </React.Fragment>
    ));
  }
  return text;
}

