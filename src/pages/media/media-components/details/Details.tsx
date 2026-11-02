import type { Media } from "../../../../types/tmdb";
import Banner from "./components/banner/Banner";
import Summary from "./components/summary/Summary";
import Actions from "./components/actions/Actions";

export default function MediaDetails({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-0">
            <Banner media={media} mediaType={mediaType} loading={loading} />
            <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
                <Summary media={media} mediaType={mediaType} loading={loading} />
                {
                    !loading &&
                    <Actions media={media} mediaType={mediaType} mobile />
                }
            </div>
        </div>
    )
}