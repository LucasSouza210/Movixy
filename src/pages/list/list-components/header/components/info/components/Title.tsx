import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title({ fixed, title }: { fixed: boolean | undefined, title: string | undefined }) {

    const { line } = useTranslate()

    const listTitle = title ? (fixed ? line(title) : title) : line('noTitle')

    return (
        <p className="text-lg sm:text-xl md:text-[22px] lg:text-base xl:text-lg 2xl:text-[20px] font-medium tracking-wider text-black dark:text-white">
            {listTitle}
        </p>
    )
}