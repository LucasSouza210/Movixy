import type { Ref } from "react"

export default function Measurer({ overview, textRef }: { overview: string, textRef: Ref<HTMLSpanElement> }) {
    return (
        <span ref={textRef} aria-hidden="true" className="absolute invisible pointer-events-none inset-x-0 top-0 line-clamp-3">
            {overview}
        </span>
    )
}