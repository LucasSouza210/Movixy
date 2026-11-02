import Directors from "./components/content/directors/Directors"
import Info from "./components/content/Info"
import Title from "./components/Title"

export type Director = {
    id: number
    name: string
}

export default function MetricCard({ title, content, directors }: { title: string, content?: string | number | undefined, directors?: Director[] | undefined }) {
    return (
        <div className="w-full h-fit flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] border bg-default border-zinc-200 dark:border-zinc-800/80">
            <Title title={title} />
            {
                directors && directors.length > 0 ?
                    <Directors directors={directors} />
                    :
                    <Info info={content} />
            }
        </div>
    )
}