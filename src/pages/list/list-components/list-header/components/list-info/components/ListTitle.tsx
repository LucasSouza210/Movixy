import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListTitle({ fixed, title }: { fixed: boolean | undefined, title: string | undefined }) {

    const { line } = useTranslate()

    const listTitle = title ? (fixed ? line(title) : title) : line('noTitle')

    return (
        <p className="text-lg font-medium tracking-wider text-black dark:text-white">
            {listTitle}
        </p>
    )
}