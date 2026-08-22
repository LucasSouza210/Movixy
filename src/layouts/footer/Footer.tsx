import Copyright from "./components/Copyright";
import TmdbCredtis from "./components/tmdb-credits/TmdbCredits";

export default function Footer() {
    return (
        <div className="w-full flex justify-center border-t p-8 sm:px-0 sm:py-9 md:py-10 lg:p-0 lg:py-6 xl:py-7 2xl:py-8 bg-white dark:bg-black/40 border-zinc-400/40 dark:border-zinc-600/40">
            <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-6 xl:gap-7 2xl:gap-8">
                <TmdbCredtis />
                <Copyright />
            </div>
        </div>
    )
}