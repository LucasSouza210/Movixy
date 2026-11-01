import Title from "./components/Title";
import Update from "./components/Update";

export default function Info() {
    return (
        <div className="flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Title />
            <Update />
        </div>
    )
}