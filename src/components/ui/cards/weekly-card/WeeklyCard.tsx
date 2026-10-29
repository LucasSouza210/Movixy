import type { Media } from "../../../../types/tmdb"
import Skeleton from "../../Skeleton"
import WeeklyCardInfo from "./components/WeeklyCardInfo"
import WeeklyCardBackdrop from "./components/WeeklyCardBackdrop"

export default function WeeklyCard({ media }: { media: Media | null }) {

    if (!media) {
        return (
            <Skeleton className="w-full aspect-2/3 lg:aspect-video rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] border border-transparent" />
        )
    }
    else {
        return (
            <div className="w-full aspect-2/3 lg:aspect-video flex rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default relative">
                <WeeklyCardBackdrop poster={media?.poster_path} backdrop={media?.backdrop_path} title={media?.title} />
                <WeeklyCardInfo media={media} />
            </div>
        )
    }
}