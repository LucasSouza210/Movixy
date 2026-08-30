import { useState } from "react"

export default function OptionSelect() {

    const [selected, setSelected] = useState(false)

    return (
        <span className="size-6 flex shrink-0 rounded-full border-2 border-default p-0.75" onClick={() => setSelected(prev => !prev)}>
            {
                selected &&
                <span className="size-full rounded-full bg-zinc-300 dark:bg-zinc-800" />
            }
        </span>
    )
}