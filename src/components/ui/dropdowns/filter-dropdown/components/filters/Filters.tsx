import MediaTypeFilter from "./MediaTypeFilter";
import MediaGenresFilter from "./MediaGenresFilter";
import MediaRateFilter from "./MediaRateFilter";

export default function Filters({ open, close }: { open: () => void, close: () => void }) {
    return (
        <div className="min-w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-2 xl:gap-3 2xl:gap-4">
            <MediaTypeFilter />
            <MediaGenresFilter open={open} close={close} />
            <MediaRateFilter />
        </div>
    )
}