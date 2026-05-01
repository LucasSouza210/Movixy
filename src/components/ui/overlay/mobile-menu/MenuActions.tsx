import MenuConfig from "./MenuConfig";
import MenuLogOut from "./MenuLogOut";

export default function MenuActions() {
    return (
        <div className="flex gap-4 sm:gap-4.5 md:gap-5">
            <MenuConfig />
            <MenuLogOut />
        </div>
    )
}