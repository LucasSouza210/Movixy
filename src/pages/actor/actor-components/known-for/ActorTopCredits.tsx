import MediaCard from "../../../../components/ui/cards/media-card/MediaCard";
import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll";
import type { ActorCredit } from "../../../../types/tmdb";

export default function ActorTopCredits({ credits }: { credits: ActorCredit[] }) {

    const getCreditScore = (credit: ActorCredit) => {

        const rating = credit.vote_average ?? 0,
            votes = credit.vote_count ?? 0,
            popularity = credit.popularity ?? 0,
            order = credit.order ?? 999,
            mediaWeight = credit.media_type === "tv" ? 0.9 : 1.1;

        if (votes < 100) return 0

        const importance = order <= 2 ? 1.5 : order <= 5 ? 1.3 : order <= 10 ? 1.15 : order <= 20 ? 1 : 0.8

        return (
            rating *
            Math.log10(votes + 1) *
            Math.sqrt(popularity + 1) *
            importance *
            mediaWeight
        )
    }

    const getActorTopCredits = (credits: ActorCredit[], limit: number) => {

        const excludedGenres = [99, 10767, 10764]

        return [...credits]
            .filter(credit => {
                const mediaTypeValid = credit.media_type === "movie" || credit.media_type === "tv";
                const hasVotes = (credit.vote_count ?? 0) >= 100;
                const isExcludedGenre = credit.genre_ids?.some(id => excludedGenres.includes(id));

                const character = (credit.character ?? "").toLowerCase().trim();
                const actorName = (credit.name ?? "").toLowerCase().trim();

                if (!character) return false;

                const isBlacklistedRole =
                    character.includes("self") ||
                    character.includes("host") ||
                    character.includes("various") ||
                    character === actorName;

                return mediaTypeValid && hasVotes && !isExcludedGenre && !isBlacklistedRole;
            })
            .filter((credit, index, self) => index === self.findIndex(item => item.id === credit.id))
            .sort((a, b) => getCreditScore(b) - getCreditScore(a))
            .slice(0, limit)
    }

    return (
        <HorizontalScroll className="pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={[2, 2, 2]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2]}>
            {
                getActorTopCredits(credits, 10).map((i, index) => (
                    <MediaCard media={i} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}