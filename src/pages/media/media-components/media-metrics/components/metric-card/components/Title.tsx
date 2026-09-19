export default function Title({ title }: { title: string }) {
    return (
        <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide leading-none text-default">
            {title}
        </p>
    )
}