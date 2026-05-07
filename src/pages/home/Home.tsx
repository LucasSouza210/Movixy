import PageContainer from "../../components/ui/PageContainer";
import HomeSlider from "./home-components/home-slider/HomeSlider";
import TrendingMovies from "./home-components/trending-movies/TrendingMovies";

export default function Home() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
                <HomeSlider />
                <TrendingMovies />
            </div>
        </PageContainer>
    )
}