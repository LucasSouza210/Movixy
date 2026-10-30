import Info from "./components/info/Info";
import PerfilLink from "./components/PerfilLink";

export default function MenuPerfil() {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Info />
            <PerfilLink />
        </div>
    )
}