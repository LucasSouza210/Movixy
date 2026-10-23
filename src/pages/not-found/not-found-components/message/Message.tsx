import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

export default function Message({ title, subtitle }: { title: string | undefined, subtitle: string | undefined }) {
    return (
        <div className="flex flex-col items-center gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2.5 xl:gap-2.25 2xl:gap-2.5">
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
        </div>
    )
}