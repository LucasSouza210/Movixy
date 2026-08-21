import { useAuth } from "../../../../../../hooks/useAuth";
import MenuConfig from "./components/MenuConfig";
import MenuLogOut from "./components/MenuLogOut";

export default function MenuActions() {

    const { session } = useAuth()

    return (
        <div className="flex gap-4 sm:gap-4.5 md:gap-5">
            <MenuConfig />
            {
                session &&
                <MenuLogOut />
            }
        </div>
    )
}