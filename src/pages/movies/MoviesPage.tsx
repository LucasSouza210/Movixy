import PageContainer from "../../components/ui/PageContainer";
import MovieOfTheWeek from "./movies-components/MovieOfTheWeek";
import Upcoming from "./movies-components/content-sections/Upcoming";
import Popular from "./movies-components/content-sections/Popular";
import TopRated from "./movies-components/content-sections/TopRated";

export default function MoviesPage() {
    return (
        <PageContainer>
            <MovieOfTheWeek />
            <Upcoming />
            <Popular />
            <TopRated />
        </PageContainer>
    )
}