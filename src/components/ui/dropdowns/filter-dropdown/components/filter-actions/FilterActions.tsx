import Close from "./components/Close";
import ApplyFilters from "./components/ApplyFilters";

export default function FilterActions({ close }: { close: () => void }) {
    return (
        <div className="flex self-end gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Close close={close} />
            <ApplyFilters close={close} />
        </div>
    )
}