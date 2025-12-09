import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgLight">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">記事が見つかりません</h1>
        <p className="mb-8">
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <Link
          href="/blog"
          className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          ブログ一覧に戻る
        </Link>
      </div>
    </div>
  )
}
