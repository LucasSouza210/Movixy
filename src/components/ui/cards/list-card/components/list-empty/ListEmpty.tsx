import EmptyMessage from "./components/EmptyMessage";

export default function ListEmpty() {
    return (
        <div className="w-full aspect-5/2 flex items-center justify-center border-2 border-dashed rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] border-zinc-300 dark:border-zinc-800">
            <EmptyMessage />
        </div>
    )
}