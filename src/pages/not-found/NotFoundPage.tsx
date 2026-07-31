import { useLocation } from "react-router-dom";
import PageContainer from "../../components/ui/PageContainer";
import HomeLink from "./not-found-components/HomeLink";
import NotFoundCode from "./not-found-components/NotFoundCode";
import NotFoundDescription from "./not-found-components/NotFoundDescription";
import NotFoundTitle from "./not-found-components/NotFoundTitle";

type NotFoundLocationState = {
    title?: string
    subtitle?: string
}

export default function NotFoundPage() {

    const location = useLocation()
    const state = location.state as NotFoundLocationState | null

    return (
        <PageContainer>
            <div className="flex-1 flex flex-col items-center justify-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                    <NotFoundCode />
                    <div className="flex flex-col items-center gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                        <NotFoundTitle title={state?.title} />
                        <NotFoundDescription subtitle={state?.subtitle} />
                    </div>
                </div>
                <HomeLink />
            </div>
        </PageContainer>
    )
}