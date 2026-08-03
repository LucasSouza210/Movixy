import MenuPerfilInfo from "./components/MenuPerfilInfo";
import MenuPerfilLink from "./components/MenuPerfilLink";

export default function MenuPerfil() {

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
            <MenuPerfilInfo />
            <MenuPerfilLink />
        </div>
    )
}