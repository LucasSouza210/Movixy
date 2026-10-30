import PageContainer from "../../components/ui/PageContainer";
import MovieOfTheWeek from "./movies-components/MovieOfTheWeek";
import UpcomingMovies from "./movies-components/content-sections/UpcomingMovies";
import PopularMovies from "./movies-components/content-sections/PopularMovies";
import TopRatedMovies from "./movies-components/content-sections/TopRatedMovies";

export default function MoviesPage() {
    return (
        <PageContainer defaultGap>
            <MovieOfTheWeek />
            <UpcomingMovies />
            <PopularMovies />
            <TopRatedMovies />
        </PageContainer>
    )
}