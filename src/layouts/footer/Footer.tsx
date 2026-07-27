import Copyright from "./components/Copyright";
import TmdbCredtis from "./components/tmdb-credits/TmdbCredits";

export default function Footer() {
    return (
        <div className="w-full flex justify-center border-t p-8 sm:p-10 md:p-12 lg:p-0 lg:py-8 xl:py-9 2xl:py-10 bg-white dark:bg-black/40 border-zinc-400/40 dark:border-zinc-600/40">
            <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-9 2xl:gap-10">
                <TmdbCredtis />
                <Copyright />
            </div>
        </div>
    )
}