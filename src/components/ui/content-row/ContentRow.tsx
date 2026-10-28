import { useEffect, useState } from "react";
import type { Actor, Director, Media, PersonCardData, PersonDetails, UserList } from "../../../types/tmdb"
import MediaCard from "../cards/media-card/MediaCard";
import MediaCardSkeleton from "../cards/media-card/MediaCardSkeleton";
import PersonCardSkeleton from "../cards/person-card/PersonCardSkeleton";
import PersonCard from "../cards/person-card/PersonCard";
import DirectorCardSkeleton from "../cards/director-card/DirectorCardSkeleton";
import DirectorCard from "../cards/director-card/DirectorCard";
import ListCardSkeleton from "../cards/list-card/ListCardSkeleton";
import ListCard from "../cards/list-card/ListCard";
import Title from "./components/Title";
import HorizontalScroll from "../scrolls/HorizontalScroll";

type Content = Media[] | Actor[] | Director[] | PersonDetails[] | UserList[] | PersonCardData[]

type Option = 'media' | 'actor' | 'director' | 'list'

type ContentRowProps = {
    className?: string
    listStyle?: 'default' | 'director'
    children?: React.ReactNode
    title?: string
    content: Content | null
    option: Option
    itemsPerView?: number[]
    gapPerBreakpoint?: number[]
    scrollBarHeight?: number[]
}

export default function ContentRow({ className, listStyle = 'default', children, title, content, option, itemsPerView, gapPerBreakpoint, scrollBarHeight }: ContentRowProps) {

    const loading = content === null

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const screens = [640, 768, 1024, 1280, 1536]

    const getValue = (values: number[], index: number): number => {
        if (values.length === 0) return 0
        return values[index] ?? getValue(values, Math.max(0, index - 1))
    }

    const getBreakpointIndex = (windowWidth: number) => {
        let index = 0
        for (let i = 0; i < screens.length; i++) {
            if (windowWidth >= screens[i]) index = i + 1
        }
        return index
    }

    const getLength = (values: number[], windowWidth: number) => {
        return getValue(values, getBreakpointIndex(windowWidth))
    }

    const items = loading ? (Array.from({ length: getLength(itemsPerView ?? [2, 2, 2, 5], windowWidth) }) as undefined[]) : (content ?? [])

    const getCard = (item: Media | Actor | Director | PersonDetails | UserList | PersonCardData | undefined, index: number) => {
        switch (option) {
            case "media": return loading ? <MediaCardSkeleton key={index} /> : <MediaCard media={item as Media} exclude={false} key={index} />;
            case "actor": return loading ? <PersonCardSkeleton key={index} /> : <PersonCard person={item as PersonCardData} key={index} />;
            case "director": return loading ? <DirectorCardSkeleton key={index} /> : <DirectorCard director={item as Director} key={index} />;
            case "list": return loading ? <ListCardSkeleton key={index} /> : <ListCard list={item as UserList} key={item?.id ?? index} />;
        }
    }

    useEffect(() => {
        const queries = screens.map(bp => window.matchMedia(`(min-width: ${bp}px)`))
        const update = () => setWindowWidth(window.innerWidth)

        queries.forEach(mql => mql.addEventListener("change", update))
        return () => queries.forEach(mql => mql.removeEventListener("change", update))
    }, [])

    return (
        <div className={`${className ?? 'w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7'}`}>
            {
                children ??
                <Title title={title} />
            }
            <HorizontalScroll className={`w-full ${getLength(itemsPerView ?? [2, 2, 2, 5], windowWidth) !== items.length ? `${listStyle == 'director' ? 'pb-5 sm:pb-6 md:pb-7 lg:pb-4 xl:pb-5 2xl:pb-6' : 'pb-4 sm:pb-5 md:pb-6 lg:pb-4 xl:pb-5 2xl:pb-6'}` : ''}`} itemsPerView={itemsPerView ?? [2, 2, 2, 5]} gapPerBreakpoint={gapPerBreakpoint ?? [5, 6, 7, 4, 5, 6]} scrollBarHeight={scrollBarHeight ?? [2, 2.5, 3, 2, 2.25, 2.5]}>
                {
                    items.map((item, index) =>
                        getCard(item, index)
                    )
                }
            </HorizontalScroll>
        </div>
    )
}