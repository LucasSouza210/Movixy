import type { Media } from "../../../../../../types/tmdb";
import Poster from "../Poster";
import Info from "./components/info/Info";
import Overview from "./components/overview/Overview";
import Genres from "./components/genres/Genres";
import Actions from "../actions/Actions";

export default function MediaSummary({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (
        <div className="w-full flex lg:gap-7 xl:gap-7.5 2xl:gap-8">
            <Poster path={media?.poster_path} title={media?.title} desktop loading={loading} />
            <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <Info media={media} mediaType={mediaType} desktop={true} loading={loading} />
                <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-3">
                    <Overview overview={media?.overview} loading={loading} />
                    <Genres genres={media?.genres} loading={loading} />
                </div>
                {
                    !loading &&
                    <Actions media={media} mediaType={mediaType} />
                }
            </div>
        </div>
    )
}