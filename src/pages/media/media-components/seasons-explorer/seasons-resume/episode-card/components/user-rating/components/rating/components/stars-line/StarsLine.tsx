import RatingStar from "./RatingStar"

export default function StarsLine({ active, setHover, setRating }: { active: number | null, setHover: React.Dispatch<React.SetStateAction<number | null>>, setRating: React.Dispatch<React.SetStateAction<number | null>> }) {
    return (
        <div className="w-full flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5" onMouseLeave={() => setHover(null)}>
            {
                Array.from({ length: 10 }).map((_, index) => {

                    const filled = typeof active === 'number' && active >= index

                    return (
                        <RatingStar filled={filled} index={index} setHover={setHover} setRating={setRating} />
                    )
                })
            }
        </div>
    )
}