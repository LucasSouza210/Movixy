import type { GuestAction } from "../../GuestModal"
import { LuBookmark, LuHeart, LuListPlus } from "react-icons/lu"
import Icon from "./components/Icon"
import Title from "./components/Title"
import Description from "./components/Description"

export default function Info({ action }: { action: GuestAction }) {

    const texts = {
        like: {
            title: 'guestLikeTitle',
            description: 'guestLikeDescription',
            icon: LuHeart
        },
        save: {
            title: 'guestSaveTitle',
            description: 'guestSaveDescription',
            icon: LuBookmark
        },
        create: {
            title: 'guestNewListTitle',
            description: 'guestNewListDescription',
            icon: LuListPlus
        }
    }

    const { title, description, icon } = texts[action]

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