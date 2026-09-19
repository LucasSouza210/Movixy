import { useLocation } from "react-router-dom";
import PageContainer from "../../components/ui/PageContainer";
import NotFoundCode from "./not-found-components/NotFoundCode";
import Message from "./not-found-components/message/Message";
import HomeLink from "./not-found-components/HomeLink";

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
                <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
                    <NotFoundCode />
                    <Message title={state?.title} subtitle={state?.subtitle} />
                </div>
                <HomeLink />
            </div>
        </PageContainer>
    )
}