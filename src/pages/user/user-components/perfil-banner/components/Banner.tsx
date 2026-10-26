import { useTranslate } from "../../../../../translations/Translations"

export default function Banner({ path }: { path: string }) {

    const { line } = useTranslate()

    return (
        <img src={path} alt={line('profileBanner')} decoding="async" className="size-full object-cover" />
    )
}