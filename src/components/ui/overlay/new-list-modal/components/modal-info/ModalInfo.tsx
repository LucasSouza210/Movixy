import Title from "./components/Title";
import Description from "./components/Description";

export default function ModalInfo() {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Title />
            <Description />
        </div>
    )
}