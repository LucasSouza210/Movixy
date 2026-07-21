import { ring } from "ldrs";

export default function DropdownLoading() {

    ring.register()

    return (
        <span className="size-full flex items-center justify-center">
            <l-ring stroke="2" speed="2" color="oklch(70.5% 0.213 47.604)" />
        </span>
    )
}