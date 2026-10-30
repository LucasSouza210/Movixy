export default function Release({ release }: { release: string }) {
    return (
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide leading-6 sm:leading-7 md:leading-8 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-default">
            {release}
        </p>
    )
}