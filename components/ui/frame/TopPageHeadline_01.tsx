// components/ui/frame/TopPageHeadline_01.tsx
import classNames from "classnames"

interface TopPageHeadline_01Props {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: React.ReactNode
  description?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  descriptionClassName?: string // p用のclassName
}

const TopPageHeadline_01: React.FC<TopPageHeadline_01Props> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section className={classNames(" w-full", className)}>
      {subtitleTop && (
        <p
          className={classNames(
            "text-lg md:text-2xl font-extrabold font-en tracking-[0.05em] !leading-[110%]",
            subtitleClassName
          )}
        >
          {subtitleTop}
        </p>
      )}
      <h1
        className={classNames(
          "text-3xl md:text-[70px] !leading-[160%] tracking-[0.14em] font-semibold",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      {description && (
        <p
          className={classNames(
            "mt-8 md:text-lg !leading-[180%] tracking-[0.05em] font-semibold",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </section>
  )
}

export default TopPageHeadline_01
