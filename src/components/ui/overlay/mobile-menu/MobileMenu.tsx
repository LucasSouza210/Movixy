import MenuActions from "./MenuActions";
import MenuLogOut from "./MenuLogOut";
import MenuNav from "./MenuNav";
import MenuPerfil from "./MenuPerfil";

export default function MobileMenu() {
    return (
        <div className="w-64 h-dvh flex flex-col justify-between p-4 bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full flex flex-col gap-6">
                <MenuPerfil />
                <MenuNav />
                <span className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />
                <MenuActions />
            </div>
            <MenuLogOut />
        </div>
    )
}