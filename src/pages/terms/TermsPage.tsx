import PageContainer from "../../components/ui/PageContainer";
import Info from "./terms-components/info/Info";
import List from "./terms-components/list/List";
import Actions from "./terms-components/actions/Actions";

export default function TermsPage() {
    return (
        <PageContainer fixedHeight customGap="gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5">
            <Info />
            <List />
            <Actions />
        </PageContainer>
    )
}