import PageContainer from "../../components/ui/PageContainer";
import TrendingActors from "./people-components/trending-actors/TrendingActors";
import TrendingDirectors from "./people-components/trending-directors/TrendingDirectors";
import WeeklyHighlight from "./people-components/weekly-highlight/WeeklyHighlight";

export default function PeoplePage() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <WeeklyHighlight />
                <TrendingActors />
                <TrendingDirectors />
            </div>
        </PageContainer>
    )
}