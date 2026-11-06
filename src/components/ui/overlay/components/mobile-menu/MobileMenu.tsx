import { useAuth } from "../../../../../hooks/auth/useAuth";
import Perfil from "./components/perfil/Perfil";
import Nav from "./components/nav/Nav";
import Options from "./components/options/Options";
import SignOut from "./components/SignOut";

export default function MobileMenu() {

    const { session } = useAuth()

    return (
        <div style={{ contain: 'layout paint' }} className="w-64 sm:w-72 md:w-80 h-dvh flex flex-col justify-between px-7 sm:px-8 md:px-9 py-6 sm:py-7 md:py-8 transform-gpu border-l border-default bg-secondary">
            <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5">
                <Perfil />
                <Nav />
                <Options />
            </div>
            {
                session &&
                <SignOut />
            }
        </div>
    )
}