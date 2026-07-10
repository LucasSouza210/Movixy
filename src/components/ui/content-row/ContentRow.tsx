import type { Actor, Director, Media } from "../../../types/tmdb"
import ActorRow from "./rows/ActorRow";
import DirectorRow from "./rows/DirectorRow";
import MediaRow from "./rows/MediaRow";

type Content = Media[] | Actor[] | Director[]

type Option = 'media' | 'actor' | 'director'

export default function ContentRow({ title, content, loading, option, itemsPerView, gapPerBreakpoint, scrollBarHeight }: { title?: string, content: Content, loading: boolean, option: Option, itemsPerView?: number[], gapPerBreakpoint?: number[], scrollBarHeight?: number[] }) {

    const getRow = () => {
        switch (option) {
            case 'media': return <MediaRow content={content as Media[]} loading={loading} itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={scrollBarHeight} />
            case 'actor': return <ActorRow content={content as Actor[]} loading={loading} itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={scrollBarHeight} />
            case 'director': return <DirectorRow content={content as Director[]} loading={loading} itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={scrollBarHeight} />
        }
    }

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">
                {title}
            </p>
            {
                getRow()
            }
        </div>
    )
}