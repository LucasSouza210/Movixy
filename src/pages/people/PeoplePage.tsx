import PageContainer from "../../components/ui/PageContainer";
import TrendingActors from "./people-components/trending-actors/TrendingActors";
import TrendingDirectors from "./people-components/trending-directors/TrendingDirectors";
import WeeklyHighlight from "./people-components/weekly-highlight/WeeklyHighlight";

export default function PeoplePage() {
    return (
        <PageContainer defaultGap>
            <WeeklyHighlight />
            <TrendingActors />
            <TrendingDirectors />
        </PageContainer>
    )
}