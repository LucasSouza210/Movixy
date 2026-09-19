import NotFoundDescription from "./components/NotFoundDescription";
import NotFoundTitle from "./components/NotFoundTitle";

export default function Message({ title, subtitle }: { title: string | undefined, subtitle: string | undefined }) {
    return (
        <div className="flex flex-col items-center gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            <NotFoundTitle title={title} />
            <NotFoundDescription subtitle={subtitle} />
        </div>
    )
}