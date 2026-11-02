import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { registerTerms } from "../../../../utils/constants";
import Term from "./components/term/Term";

export default function List() {
    return (
        <div className="flex-1 min-h-0 py-3.5 sm:py-4 md:py-4.5 lg:py-3.5 xl:py-4 2xl:py-4.5 border-y border-default">
            <OverlayScrollbarsComponent defer className="h-full" options={{ scrollbars: { autoHide: "never", theme: "os-theme-dark" } }}>
                <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                    {registerTerms.map((i, index) => (
                        <Term title={i.title} description={i.description} key={index} />
                    ))}
                </div>
            </OverlayScrollbarsComponent>
        </div>
    )
}