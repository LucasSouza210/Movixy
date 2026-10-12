import Star from "./components/Star";

export default function StarsLine() {
    return (
        <div className="w-full flex items-center gap-1.5">
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <Star key={index}/>
                ))
            }
        </div>
    )
}