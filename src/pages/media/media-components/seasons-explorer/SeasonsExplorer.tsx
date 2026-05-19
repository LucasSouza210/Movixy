import { useState } from "react";
import type { Season } from "../../../home/home-components/home-slider/HomeSlider";
import SeasonsListLink from "./SeasonsListLink";
import SeasonsResume from "./seasons-resume/SeasonsResume";

export default function SeasonsExplorer({ seasons }: { seasons: Season[] | undefined }) {

    const [selected, setSelected] = useState(1)

    return (
        <div className="flex flex-col gap-3">
            <SeasonsListLink />
            <SeasonsResume seasons={seasons} selected={selected} setSelected={setSelected} />
        </div>
    )
}