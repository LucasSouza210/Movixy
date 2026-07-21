import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getPersonDetails } from "../../services/tmdb/tmdb.services";
import type { PersonDetails } from "../../types/tmdb";
import useLang from "../../hooks/useLang";
import PageContainer from "../../components/ui/PageContainer";
import PersonPerfil from "./person-components/person-perfil/PersonPerfil";
import PersonBiography from "./person-components/person-biography/PersonBiography";
import KnownFor from "./person-components/known-for/KnownFor";
import PersonProjectsWrapper from "./person-components/person-projects/PersonProjects";
import filterCredits from "../../utils/tmdb/filterCredits";

export default function PersonPage() {

    const { id } = useParams()

    const [person, setPerson] = useState<PersonDetails | null>(null)
    const [loading, setLoading] = useState(true)

    const lang = useLang()

    const filteredCredits = useMemo(() => {
        if (!person) return []
        return filterCredits([
            ...person.combined_credits.cast,
            ...person.combined_credits.crew
        ])
    }, [person])

    useEffect(() => {
        async function load() {

            if (!id) return

            setLoading(true)

            const person = await getPersonDetails(id, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setPerson(person)
            setLoading(false)
        }

        load()
    }, [id, lang])

    return (
        <PageContainer>
            <div className="size-full lg:max-h-full flex flex-col lg:flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-10 xl:gap-11 2xl:gap-12 lg:relative">
                <PersonPerfil person={person} credits={filteredCredits} loading={loading} />
                <div className="lg:w-full lg:min-w-0 flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-6 xl:gap-7 2xl:gap-8">
                    <PersonBiography person={person} credits={filteredCredits} loading={loading} />
                    {
                        filteredCredits.length > 0 &&
                        <KnownFor credits={filteredCredits} loading={loading} />
                    }
                    <PersonProjectsWrapper projects={filteredCredits} loading={loading} />
                </div>
            </div>
        </PageContainer>
    )
}