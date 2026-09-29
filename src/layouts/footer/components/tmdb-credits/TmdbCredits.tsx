import DataSource from "./components/data-source/DataSource";
import TmdbDescription from "./components/TmdbDescription";
import TmdbLink from "./components/TmdbLink";

export default function TmdbCredtis() {
    return (
        <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4 pb-6 sm:pb-7 md:pb-8 lg:pb-5 xl:pb-6 2xl:pb-7 border-b border-zinc-300/50 dark:border-zinc-700/50">
            <DataSource />
            <TmdbDescription />
            <TmdbLink />
        </div>
    )
}