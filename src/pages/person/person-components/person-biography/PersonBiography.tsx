import { useTranslate } from "../../../../translations/Translations"
import type { PersonCredit, PersonDetails } from "../../../../types/tmdb"
import PersonInfo from "../person-perfil/person-info/PersonInfo"
import PersonName from "../person-perfil/person-info/components/PersonName"
import BiographyContent from "./components/BiographyContent"
import BiographyContentSkeleton from "./components/BiographyContentSkeleton"

export default function PersonBiography({ person, credits, loading }: { person: PersonDetails | null, credits: PersonCredit[], loading: boolean }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <div className="w-full hidden lg:flex">
                <PersonName name={person?.name} loading={loading} />
            </div>
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('biographyTitle')}</p>
                {
                    loading ?
                        <BiographyContentSkeleton />
                        :
                        <BiographyContent biography={person?.biography} />
                }
            </div>
            <div className="hidden lg:block">
                <PersonInfo person={person} credits={credits} loading={loading} />
            </div>
        </div>
    )
}