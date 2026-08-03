import MenuOptions from "./components/menu-options/MenuOptions";
import MenuNav from "./components/menu-nav/MenuNav";
import MenuPerfil from "./components/menu-perfil/MenuPerfil";
import MenuActions from "./components/menu-actions/MenuActions";

export default function MobileMenu() {
    return (
        <div style={{ contain: 'layout paint' }} className="w-64 sm:w-72 md:w-80 h-dvh flex flex-col justify-between px-8 sm:px-9 md:px-10 py-6 sm:py-7 md:py-8 transform-gpu bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8">
                <MenuPerfil />
                <MenuNav />
                <MenuOptions />
            </div>
            <MenuActions />
        </div>
    )
}