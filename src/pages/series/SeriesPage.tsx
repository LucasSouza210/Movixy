import PageContainer from "../../components/ui/PageContainer";
import SerieOfTheWeek from "./series-components/SerieOfTheWeek";
import UpcomingSeries from "./series-components/content-sections/UpcomingSeries";
import PopularSeries from "./series-components/content-sections/PopularSeries";
import TopRatedSeries from "./series-components/content-sections/TopRatedSeries";

export default function SeriesPage() {
    return (
        <PageContainer>
            <SerieOfTheWeek />
            <UpcomingSeries />
            <PopularSeries />
            <TopRatedSeries />
        </PageContainer>
    )
}