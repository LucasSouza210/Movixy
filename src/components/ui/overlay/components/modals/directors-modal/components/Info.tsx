import Title from "../../../../ui/Title";
import Subtitle from "../../../../ui/Subtitle";

export default function Info() {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Title text="directorsModalTitle"/>
            <Subtitle text="directorsModalSubtitle"/>
        </div>
    )
}