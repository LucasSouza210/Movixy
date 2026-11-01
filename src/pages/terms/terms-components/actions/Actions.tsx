import Decline from "./components/Decline";
import Accept from "./components/Accept";

export default function Actions() {
    return (
        <div className="w-full flex items-center justify-end gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <Decline />
            <Accept />
        </div>
    )
}