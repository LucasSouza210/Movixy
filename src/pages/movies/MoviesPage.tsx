import PageContainer from "../../components/ui/PageContainer";
import MovieOfTheWeek from "./movies-components/movie-of-the-week/MovieOfTheWeek";
import UpcomingMovies from "./movies-components/upcoming-movies/UpcomingMovies";
import TopRatedMovies from "./movies-components/top-rated-movies/TopRatedMovies";

export default function MoviesPage() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <MovieOfTheWeek />
                <UpcomingMovies/>
                <TopRatedMovies />
            </div>
        </PageContainer>
    )
}