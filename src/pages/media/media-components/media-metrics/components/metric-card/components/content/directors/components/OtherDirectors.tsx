export default function OtherDirectors({ length }: { length: number }) {
    return (
        <p className="shrink-0 font-semibold text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-7.5 sm:leading-8.25 md:leading-9 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 text-default">
            {
                `, +${length - 1}`
            }
        </p>
    )
}