import PageContainer from "../../components/ui/PageContainer";
import SerieOfTheWeek from "./series-components/serie-of-the-week/SerieOfTheWeek";
import TopRatedSeries from "./series-components/top-rated-series/TopRatedSeries";
import UpcomingSeries from "./series-components/upcoming-series/UpcomingSeries";

export default function SeriesPage() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <SerieOfTheWeek />
                <UpcomingSeries />
                <TopRatedSeries />
            </div>
        </PageContainer>
    )
}