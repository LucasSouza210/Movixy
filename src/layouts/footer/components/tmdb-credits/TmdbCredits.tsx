import DataSource from "./components/DataSource";
import TmdbDescription from "./components/TmdbDescription";
import TmdbLink from "./components/TmdbLink";

export default function TmdbCredtis() {
    return (
        <div className="flex flex-col gap-4 pb-6 border-b border-zinc-300/50 dark:border-zinc-700/50">
            <DataSource />
            <TmdbDescription />
            <TmdbLink />
        </div>
    )
}