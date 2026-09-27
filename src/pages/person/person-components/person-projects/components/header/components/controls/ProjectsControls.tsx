import Filter from "./components/Filter";
import Order from "./components/Order";

export default function ProjectsControls() {
    return (
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.75 2xl:gap-3">
            <Order />
            <Filter />
        </div>
    )
}