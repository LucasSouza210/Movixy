import Title from "./components/Title";
import Description from "./components/Description";

export default function Term({ title, description }: { title: string, description: string }) {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Title title={title} />
            <Description description={description} />
        </div>
    )
}