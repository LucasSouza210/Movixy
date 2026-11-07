import { useTranslate } from "../../../../translations/Translations"
import useUserRating, { type RatingTarget } from "../../../../hooks/data/useUserRating"
import RemoveRating from "../../buttons/RemoveRating"
import RatingSlider from "./components/RatingSlider"
import RatingBadge from "./components/RatingBadge"

type RatingPanelTheme = "card" | "overlay"

type RatingPanelProps = {
    target: RatingTarget
    theme?: RatingPanelTheme
}

type ThemeClassNames = {
    container: string
    row: string
    slider: string
    badge: string
    title: string
    description: string
}

const themes: Record<RatingPanelTheme, ThemeClassNames> = {
    card: {
        container: "w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 lg:col-span-3 relative border rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 bg-default border-default",
        row: "justify-between",
        slider: "",
        badge: "",
        title: "",
        description: ""
    },
    overlay: {
        container: "w-full flex flex-col justify-center p-6 sm:p-7 md:p-8 lg:p-0 gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 relative border-t lg:border-none shrink-0 bg-transparent border-default",
        row: "",
        slider: "lg:w-3/5 lg:bg-zinc-900/50 lg:border-zinc-700/60",
        badge: "lg:bg-zinc-900/50 lg:border-zinc-700/60 lg:text-zinc-300",
        title: "lg:text-white",
        description: "lg:text-zinc-300"
    }
}

export default function RatingPanel({ target, theme = "card" }: RatingPanelProps) {

    const { line } = useTranslate()

    const { draft, setDraft, hasRating, commit, canRate, requireRateLogin } = useUserRating(target)

    const styles = themes[theme]

    const removeProps = {
        mediaId: target.id,
        mediaType: target.mediaType,
        episode: target.season !== undefined && target.episode !== undefined ? { season: target.season, number: target.episode } : undefined
    }

    return (
        <div className={styles.container}>
            {
                canRate && theme === "card" &&
                <RemoveRating {...removeProps} defaultStyle />
            }
            <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                <p className={`font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider text-title ${styles.title}`}>
                    {line('userRatingTitle')}
                </p>
                <p className={`font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-default ${styles.description}`}>
                    {line('ratingSlider')}
                </p>
            </div>
            <div className={`w-full flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 ${styles.row}`}>
                <RatingSlider draft={draft} onDraftChange={setDraft} onCommit={commit} onBegin={requireRateLogin} className={styles.slider} />
                <div className="flex items-center lg:gap-2 xl:gap-2.5 2xl:gap-3">
                    <RatingBadge rating={hasRating ? draft : null} className={styles.badge} />
                    {
                        canRate && theme === "overlay" &&
                        <RemoveRating {...removeProps} />
                    }
                </div>
            </div>
            {
                canRate && theme === "overlay" &&
                <RemoveRating {...removeProps} mobile />
            }
        </div>
    )
}