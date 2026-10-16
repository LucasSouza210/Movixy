import { useTranslate } from "../../../../../../translations/Translations"

export default function DrawerTitle({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-fit text-xl sm:text-xl md:text-2xl lg:text-lg xl:text-[20px] 2xl:text-[22px] font-medium tracking-wider leading-none text-black dark:text-white">
            {line(title)}
        </p>
    )
}