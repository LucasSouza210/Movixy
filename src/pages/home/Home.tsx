import PageContainer from "../../components/ui/PageContainer";
import HomeSlider from "./home-components/home-slider/HomeSlider";

export default function Home() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col">
                <HomeSlider />
            </div>
        </PageContainer>
    )
}