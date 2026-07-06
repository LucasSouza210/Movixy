import { useTranslate } from "../../../../translations/Translations"
import DirectorLink from "./DirectorLink"

type Director = {
    id: number
    name: string
}

export default function MediaInfoCard({ title, content, directors }: { title: string | undefined, content?: string | number | undefined, directors?: Director[] | undefined }) {

    const { line } = useTranslate()

    return (
        <div className="w-full min-h-24 sm:min-h-27 md:min-h-30 lg:min-h-18 xl:min-h-22 2xl:min-h-26 flex flex-col justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 overflow-hidden rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px] border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{title}</p>
            {
                directors && directors.length > 0 ?
                    <div className="flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
                        {
                            directors.map((i, index) => (
                                <DirectorLink id={i.id} name={i.name} key={index} />
                            ))
                        }
                    </div>
                    :
                    <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4.5 xl:leading-5 2xl:leading-5.5 text-wrap wrap-break-word text-zinc-900 dark:text-zinc-100">{directors ? line('notInformed') : content}</p>
            }
        </div>
    )
}