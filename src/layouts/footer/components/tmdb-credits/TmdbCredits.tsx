import DataSource from "./components/DataSource";
import TmdbDescription from "./components/TmdbDescription";
import TmdbLink from "./components/TmdbLink";

export default function TmdbCredtis() {
    return (
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5 pb-8 sm:pb-10 md:pb-12 lg:pb-8 xl:pb-9 2xl:pb-10 border-b border-zinc-300/50 dark:border-zinc-700/50">
            <DataSource />
            <TmdbDescription />
            <TmdbLink />
        </div>
    )
}