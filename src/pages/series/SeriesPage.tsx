import PageContainer from "../../components/ui/PageContainer";
import SerieOfTheWeek from "./series-components/serie-of-the-week/SerieOfTheWeek";
import UpcomingSeries from "./series-components/content-sections/UpcomingSeries";
import PopularSeries from "./series-components/content-sections/PopularSeries";
import TopRatedSeries from "./series-components/content-sections/TopRatedSeries";

export default function SeriesPage() {
    return (
        <PageContainer>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <SerieOfTheWeek />
                <UpcomingSeries />
                <PopularSeries />
                <TopRatedSeries />
            </div>
        </PageContainer>
    )
}