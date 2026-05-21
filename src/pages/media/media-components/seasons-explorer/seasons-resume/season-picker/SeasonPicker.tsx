import { useTranslate } from "../../../../../../translations/Translations";
import type { Season } from "../../../../../../types/tmdb";
import SeasonOption from "./SeasonOption";

export default function SeasonPicker({ seasons, selected, setSelected }: { seasons: Season[] | undefined, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>> }) {

    const { line } = useTranslate()

    return (
        <div className="w-full h-12 flex border-b border-zinc-200 dark:border-zinc-800">
            <p className="h-full flex items-center pr-4 font-medium text-xs tracking-wide leading-none text-zinc-400">{line('season')}</p>
            <div className="size-full grid grid-flow-col auto-cols-[calc((100%-1.5rem)/4)] gap-2 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:cursor-pointer [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-200 [&::-webkit-scrollbar-thumb]:hover:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 dark:[&::-webkit-scrollbar-thumb]:hover:bg-zinc-700">
                {
                    seasons?.filter(season => season.season_number > 0).map((s, index) => (
                        <SeasonOption seasonNumber={s.season_number} selected={selected} setSelected={setSelected} key={index} />
                    ))
                }
            </div>
        </div>
    )
}