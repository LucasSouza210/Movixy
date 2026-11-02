import type { IconType } from "react-icons"
import Meta from "./components/Meta"

type Info = {
    content: string
    icon: IconType
    type: string
}

export default function PosterMeta({ info }: { info: Info[] }) {
    return (
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5">
            {
                info.map((i, index) => {

                    return (
                        <Meta content={i.content} icon={i.icon} type={i.type} key={index} />
                    )
                })
            }
        </div>
    )
}