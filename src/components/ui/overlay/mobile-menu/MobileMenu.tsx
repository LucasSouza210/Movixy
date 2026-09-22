import MenuOptions from "./components/menu-options/MenuOptions";
import MenuNav from "./components/menu-nav/MenuNav";
import MenuPerfil from "./components/menu-perfil/MenuPerfil";
import MenuActions from "./components/menu-actions/MenuActions";

export default function MobileMenu() {
    return (
        <div style={{ contain: 'layout paint' }} className="w-64 sm:w-72 md:w-80 h-dvh flex flex-col justify-between px-8 sm:px-9 md:px-10 py-6 sm:py-7 md:py-8 transform-gpu border-l border-default bg-zinc-100 dark:bg-zinc-950">
            <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6">
                <MenuPerfil />
                <MenuNav />
                <MenuOptions />
            </div>
            <MenuActions />
        </div>
    )
}