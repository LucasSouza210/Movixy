import { FaCheck } from "react-icons/fa";

export default function Checkbox({ selected }: { selected: boolean }) {
    return (
        <span className="size-4 sm:size-4.5 md:size-5 lg:size-3.5 xl:size-4.25 2xl:size-5 flex items-center justify-center border rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-[3px] xl:rounded-sm 2xl:rounded-[5px] bg-elevated border-default">
            {
                selected &&
                <FaCheck className="size-1/2 fill-orange-400 dark:fill-orange-500" />
            }
        </span>
    )
}