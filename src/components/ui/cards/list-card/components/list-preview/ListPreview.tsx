import type { Media, Person } from "../../../../../../types/tmdb";
import PreviewItem from "./components/PreviewItem";

const isPerson = (item: Media | Person): item is Person => {
    return "profile_path" in item
}

export default function ListPreview({ list }: { list: (Media | Person)[] | null }) {
    return (
        <div className="w-full flex items-center gap-3">
            {
                list &&
                list.slice(0, 4).map((i, index) => (
                    <PreviewItem path={isPerson(i) ? i.profile_path : i.poster_path} title={isPerson(i) ? i.name : i.media_type == 'movie' ? i.title : i.name} key={index} />
                ))
            }
        </div>
    )
}