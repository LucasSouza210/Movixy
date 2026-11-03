import { useAuth } from "../../../../../../../hooks/auth/useAuth";
import MenuConfig from "./components/MenuConfig";
import SignOut from "./components/SignOut";

export default function Actions() {

    const { session } = useAuth()

    return (
        <div className="flex gap-4 sm:gap-4.5 md:gap-5">
            <MenuConfig />
            {
                session &&
                <SignOut />
            }
        </div>
    )
}