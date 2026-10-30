import Title from "./components/Title"

export default function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.75 md:gap-4.5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
            <Title title={title} />
            <div className="w-full flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                {children}
            </div>
        </div>
    )
}