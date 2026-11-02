export default function FieldsContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            {children}
        </div>
    )
}