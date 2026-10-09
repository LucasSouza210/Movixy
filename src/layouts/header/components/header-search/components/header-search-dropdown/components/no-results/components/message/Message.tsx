import { LuSearchX } from "react-icons/lu";
import Suggestion from "./components/Suggestion";
import Title from "./components/Title";

export default function Message() {
    return (
        <div className="size-full flex flex-col items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <LuSearchX className="size-1/5 text-default" />
            <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1 2xl:gap-1.5">
                <Title />
                <Suggestion />
            </div>
        </div>
    )
}