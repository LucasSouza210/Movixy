import MenuOptions from "./MenuOptions";
import MenuNav from "./MenuNav";
import MenuPerfil from "./MenuPerfil";
import MenuActions from "./MenuActions";

export default function MobileMenu() {
    return (
        <div className="w-64 sm:w-72 md:w-80 h-dvh flex flex-col justify-between p-6 sm:p-7 md:p-8 bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8">
                <MenuPerfil />
                <MenuNav />
                <MenuOptions />
            </div>
            <MenuActions />
        </div>
    )
}