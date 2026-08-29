import EmptyMessage from "./components/EmptyMessage";

export default function ListEmpty() {
    return (
        <div className="w-full aspect-7/3 flex items-center justify-center border-2 border-dashed rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] border-default bg-zinc-50 dark:bg-zinc-900/20">
            <EmptyMessage />
        </div>
    )
}