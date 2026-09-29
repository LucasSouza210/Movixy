import PageContainer from "../../components/ui/PageContainer";
import SerieOfTheWeek from "./series-components/serie-of-the-week/SerieOfTheWeek";
import UpcomingSeries from "./series-components/content-sections/UpcomingSeries";
import PopularSeries from "./series-components/content-sections/PopularSeries";
import TopRatedSeries from "./series-components/content-sections/TopRatedSeries";

export default function SeriesPage() {
    return (
        <PageContainer defaultGap>
            <SerieOfTheWeek />
            <UpcomingSeries />
            <PopularSeries />
            <TopRatedSeries />
        </PageContainer>
    )
}