export default function MediaContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            { 
                children
            }
        </div>
    )
}