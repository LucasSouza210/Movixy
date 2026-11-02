export default function Release({ release }: { release: string }) {
    return (
        <span className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-wide leading-none text-zinc-300 lg:text-default">
            {`(${release})`}
        </span>
    )
}