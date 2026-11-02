import PageContainer from "../../components/ui/PageContainer";
import SerieOfTheWeek from "./series-components/SerieOfTheWeek";
import Upcoming from "./series-components/content-sections/Upcoming";
import Popular from "./series-components/content-sections/Popular";
import TopRated from "./series-components/content-sections/TopRated";

export default function SeriesPage() {
    return (
        <PageContainer>
            <SerieOfTheWeek />
            <Upcoming />
            <Popular />
            <TopRated />
        </PageContainer>
    )
}