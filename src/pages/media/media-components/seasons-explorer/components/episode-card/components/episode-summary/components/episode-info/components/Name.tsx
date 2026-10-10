export default function Name({name}: {name: string}) {
    return (
        <p className="lg:max-w-6/10 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-6.5 xl:leading-7.25 2xl:leading-8 text-wrap text-black dark:text-white lg:text-white">
            {name}
        </p>
    )
}