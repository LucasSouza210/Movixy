import AboutMovixy from "./components/AboutMovixy";
import FooterLogo from "./components/FooterLogo";

export default function FooterSummary() {
    return (
        <div className="flex flex-col gap-1">
            <FooterLogo />
            <AboutMovixy />
        </div>
    )
}