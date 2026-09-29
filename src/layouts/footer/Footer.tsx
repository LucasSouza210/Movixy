import Copyright from "./components/Copyright";
import TmdbCredtis from "./components/tmdb-credits/TmdbCredits";

export default function Footer() {
    return (
        <div className="w-full flex justify-center border-t px-8 sm:px-0 py-7 sm:py-8 md:py-9 lg:p-0 lg:py-6 xl:py-6.5 2xl:py-7 bg-white dark:bg-black/40 border-zinc-400/40 dark:border-zinc-600/40">
            <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-center gap-7 sm:gap-8 md:gap-9 lg:gap-6 xl:gap-6.5 2xl:gap-7">
                <TmdbCredtis />
                <Copyright />
            </div>
        </div>
    )
}