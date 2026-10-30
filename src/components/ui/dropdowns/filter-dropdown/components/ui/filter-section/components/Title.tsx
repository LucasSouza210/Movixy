export default function Title({ title }: { title: string }) {
    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-none text-black dark:text-white">
            {title}
        </p>
    )
}