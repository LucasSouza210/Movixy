import { useTranslate } from "../../../../../../../translations/Translations"

export default function Meta({ credits, role }: { credits: number, role?: string }) {

    const { line } = useTranslate()

    const creditsLabel = credits ? `${credits} ${line(credits == 1 ? 'project' : 'projects')}` : line('noProjects')

    const roleLabel = role?.trim() || line('notInformed')

    const label = role !== undefined ? roleLabel : creditsLabel

    return (
        <p className="font-medium text-xs sm:text-[15px] md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wide text-center leading-5 sm:leading-6.25 md:leading-7.5 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 text-default">
            {
                label
            }
        </p>
    )
}