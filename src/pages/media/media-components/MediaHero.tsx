import type { Media } from "../../home/home-components/home-slider/HomeSlider";

export default function MediaHero({ media }: { media: Media }) {

    if (!media) return

    return (
        <div className="w-full flex">
            <div className="w-full relative">
                <span className="size-full absolute z-10 bg-black/50"></span>
                <img src={`//image.tmdb.org/t/p/original${media?.backdrop_path}`} alt="" className="w-full h-auto" />
            </div>
        </div>
    )
}