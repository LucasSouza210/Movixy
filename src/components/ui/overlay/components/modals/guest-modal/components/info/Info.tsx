import type { GuestAction } from "../../GuestModal"
import { guestModalTexts } from "../../../../../../../../utils/constants"
import Icon from "./components/Icon"
import Title from "./components/Title"
import Description from "./components/Description"

export default function Info({ action }: { action: GuestAction }) {

    const { title, description, icon } = guestModalTexts[action]

    return (
        <div className="w-full flex flex-col items-center gap-3 sm:gap-3.75 md:gap-4.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <Icon icon={icon} />
            <div className="w-full flex flex-col items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                <Title title={title} />
                <Description description={description} />
            </div>
        </div>
    )
}