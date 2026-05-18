import type { Genre } from "../../../home/home-components/home-slider/HomeSlider";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-[10px] tracking-wide leading-none py-3 px-4 rounded-full border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-200">
            {genre?.name}
        </span>
    )
}