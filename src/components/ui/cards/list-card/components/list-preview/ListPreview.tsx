import type { Media, Person } from "../../../../../../types/tmdb";
import MoreItems from "./components/MoreItems";
import PreviewItem from "./components/PreviewItem";

const isPerson = (item: Media | Person): item is Person => {
    return "profile_path" in item
}

export default function ListPreview({ list }: { list: (Media | Person)[] | null }) {
    return (
        <div className="w-full grid grid-cols-4 items-center gap-2">
            {
                list &&
                list.slice(0, 3).map((i, index) => (
                    <PreviewItem path={isPerson(i) ? i.profile_path : i.poster_path} title={isPerson(i) ? i.name : i.media_type == 'movie' ? i.title : i.name} key={index} />
                ))
            }
            {
                list && list?.length > 3 &&
                <MoreItems length={list.length} />
            }
        </div>
    )
}