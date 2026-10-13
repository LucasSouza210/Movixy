import Title from "./components/Title";
import Desc from "./components/Desc";

export default function Info() {
    return (
        <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            <Title />
            <Desc />
        </div>
    )
}