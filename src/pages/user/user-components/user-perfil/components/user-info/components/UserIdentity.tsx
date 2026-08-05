export default function UserIdentity({ name, userName }: { name: string | undefined | null, userName: string | undefined | null }) {
    return (
        <div className="h-fit flex flex-col gap-2.5">
            <p className="text-xl font-medium tracking-wider leading-none line-clamp-1 text-black dark:text-white">{name}</p>
            <p className="text-sm font-medium tracking-wider leading-none line-clamp-1 text-zinc-500 dark:text-zinc-400">@{userName}</p>
        </div>
    )
}