import Title from "./components/Title"
import TmdbLogo from "./components/TmdbLogo"

export default function DataSource() {
    return (
        <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4 2xl:gap-4.5">
            <Title />
            <TmdbLogo />
        </div>
    )
}