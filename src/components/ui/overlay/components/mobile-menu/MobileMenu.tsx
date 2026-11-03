import Options from "./components/options/Options";
import Nav from "./components/nav/Nav";
import Perfil from "./components/perfil/Perfil";
import Actions from "./components/actions/Actions";

export default function MobileMenu() {
    return (
        <div style={{ contain: 'layout paint' }} className="w-64 sm:w-72 md:w-80 h-dvh flex flex-col justify-between px-8 sm:px-9 md:px-10 py-6 sm:py-7 md:py-8 transform-gpu border-l border-default bg-secondary">
            <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5">
                <Perfil />
                <Nav />
                <Options />
            </div>
            <Actions />
        </div>
    )
}