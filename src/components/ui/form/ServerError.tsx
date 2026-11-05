export default function Error({ error }: { error: string }) {
    return (
        <p className="text-center text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-5.5 2xl:leading-6 line-clamp-3 text-red-500">
            {error} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate voluptatibus architecto voluptates beatae vel quaerat perferendis, corrupti ab consectetur maxime quos sunt repellendus, accusantium, autem nihil cum quibusdam? Nulla?
        </p>
    )
}