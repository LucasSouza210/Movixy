import EmptyMessage from "./components/EmptyMessage";

export default function ListEmpty() {
    return (
        <div className="relative w-full grid grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <div className="aspect-2/3 invisible" />
            <EmptyMessage />
        </div>
    )
}