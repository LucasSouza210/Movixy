import { useState } from "react";
import type { Media, Season } from "../../../../types/tmdb";
import SeasonsListLink from "./SeasonsListLink";
import SeasonsResume from "./seasons-resume/SeasonsResume";

export default function SeasonsExplorer({ media, seasons }: { media: Media, seasons: Season[] | undefined }) {

    const [selected, setSelected] = useState(1)

    return (
        <div className="flex flex-col gap-3">
            <SeasonsListLink />
            <SeasonsResume media={media} seasons={seasons} selected={selected} setSelected={setSelected} />
        </div>
    )
}