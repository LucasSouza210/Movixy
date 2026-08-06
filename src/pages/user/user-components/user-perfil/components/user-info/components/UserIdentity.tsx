export default function UserIdentity({ name, userName }: { name: string | undefined | null, userName: string | undefined | null }) {
    return (
        <div className="h-fit flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
            <p className="text-xl sm:text-[22px] md:text-2xl lg:text-lg xl:text-[20px] 2xl:text-[22px] font-medium tracking-wider line-clamp-1 text-black dark:text-white">{name}</p>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider line-clamp-1 text-zinc-500 dark:text-zinc-400">@{userName}</p>
        </div>
    )
}