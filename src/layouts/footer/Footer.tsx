import Copyright from "./components/Copyright";
import FooterSummary from "./components/footer-summary/FooterSummary";
import TmdbCredtis from "./components/tmdb-credits/TmdbCredits";

export default function Footer() {
    return (
        <div className="w-full min-h-60 flex justify-center border-t p-8 bg-white dark:bg-black/20 border-zinc-400/40 dark:border-zinc-600/40">
            <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col gap-8">
                <TmdbCredtis />
                <Copyright />
            </div>
        </div>
    )
}