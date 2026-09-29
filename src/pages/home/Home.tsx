import PageContainer from "../../components/ui/PageContainer";
import HomeSlider from "./home-components/home-slider/HomeSlider";
import TrendingMovies from "./home-components/content-sections/TrendingMovies";
import TrendingTvShows from "./home-components/content-sections/TrendingTvShows";
import PopularActors from "./home-components/content-sections/PopularActors";
import DirectorsColections from "./home-components/content-sections/DirectorsColections";

export default function Home() {
    return (
        <PageContainer defaultGap>
            <HomeSlider />
            <TrendingMovies />
            <TrendingTvShows />
            <PopularActors />
            <DirectorsColections />
        </PageContainer>
    )
}