export default function Title({ title }: { title: string }) {
    return (
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wide text-default">
            {title}
        </p>
    )
}