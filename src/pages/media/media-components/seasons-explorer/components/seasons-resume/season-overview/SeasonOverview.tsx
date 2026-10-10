import { useContext } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import { TbPointFilled } from "react-icons/tb";
import { ExplorerContexts } from "../../../../../../../contexts/SeasonExplorerProvider";
import useLang from "../../../../../../../hooks/useLang";
import Rating from "./components/Rating";


export default function SeasonOverview() {

    const lang = useLang()

    const explorer = useContext(ExplorerContexts)

    const { selectedSeason, episodes } = explorer!

    const { line } = useTranslate()

    const episodesLabel = episodes?.length === 1 ? line('showEpisodes').slice(0, -1) : line('showEpisodes')

    return (
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="flex items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none text-default">{`${lang == 'en' ? 'S' : 'T'}${selectedSeason}`} <TbPointFilled className="size-1.5 sm:size-2 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5" /> <span className="lowercase">{`${episodes?.length} ${episodesLabel}`}</span></p>
            <Rating episodes={episodes}/>
        </div>
    )
}