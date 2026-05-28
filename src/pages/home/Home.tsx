import PageContainer from "../../components/ui/PageContainer";
import DirectorsColections from "./home-components/directors-colections/DirectorsColections";
import HomeSlider from "./home-components/home-slider/HomeSlider";
import PopularActors from "./home-components/popular-actors/PopularActors";
import TrendingMovies from "./home-components/trending-movies/TrendingMovies";
import TrendingTvShows from "./home-components/trending-tv-shows/TrendingTvShows";

export default function Home() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <HomeSlider />
                <TrendingMovies />
                <TrendingTvShows />
                <PopularActors />
                <DirectorsColections />
            </div>
        </PageContainer>
    )
}