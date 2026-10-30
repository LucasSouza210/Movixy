import { useFormattedDate } from "../../../../../../../../../../../hooks/utils/useFormattedDate";
import { TbPointFilled } from "react-icons/tb";
import useLang from "../../../../../../../../../../../hooks/utils/useLang";

export default function Release({ season, episodeNumber, airDate }: { season: number, episodeNumber: number, airDate: string | undefined }) {

    const lang = useLang()

    return (
        <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none text-default lg:text-zinc-300">
            {`${lang == 'en' ? 'S' : 'T'}${season}`}.{`E${episodeNumber}`}
            <TbPointFilled className="size-1.5 sm:size-2 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5" />
            {`${useFormattedDate(airDate)}`}
        </p>
    )
}