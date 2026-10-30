import { useFormattedDate } from "../../../../../../hooks/utils/useFormattedDate";
import { useTranslate } from "../../../../../../translations/Translations";
import type { PersonCredit, Media } from "../../../../../../types/tmdb";
import Title from "./components/title/Title";
import Release from "./components/Release";

export default function Details({ media, onlyYear }: { media: Media | PersonCredit, onlyYear?: boolean }) {

    const { line } = useTranslate()

    const isMovie = media.media_type == 'movie'
    const validDate = media.release_date || media.first_air_date

    const info = {
        title: media.title ?? media.name ?? line('noTitle'),
        year: validDate ? `(${media[isMovie ? "release_date" : "first_air_date"]?.split("-")[0]})` : "N/A",
        date: validDate ? useFormattedDate(media.release_date ?? media.first_air_date) : line('noReleaseDate')
    }

    return (
        <div className="flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-px xl:gap-0.5 2xl:gap-0.75">
            <Title title={info.title} onlyYear={onlyYear} year={info.year} />
            {
                !onlyYear &&
                <Release release={info.date} />
            }
        </div>
    )
}