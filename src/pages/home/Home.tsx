import PageContainer from "../../components/ui/PageContainer";
import HomeSlider from "./home-components/home-slider/HomeSlider";
import TrendingMovies from "./home-components/content-sections/TrendingMovies";
import TrendingTvShows from "./home-components/content-sections/TrendingTvShows";
import PopularActors from "./home-components/content-sections/PopularActors";
import DirectorsColections from "./home-components/content-sections/DirectorsColections";

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