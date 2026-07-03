export default function CastCardInfo({ name, character }: { name: string, character: string }) {
    return (
        <div className="flex flex-col items-center gap-px lg:gap-0.5 xl:gap-0.75">
            <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-4.5 sm:leading-5.25 md:leading-6 lg:leading-4.5 xl:leading-5 2xl:leading-6 line-clamp-2 text-zinc-900 dark:text-zinc-100">{name}</p>
            <p className="text-center font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-4 sm:leading-5 md:leading-6 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 line-clamp-2 text-zinc-600 dark:text-zinc-300">{character}</p>
        </div>
    )
}