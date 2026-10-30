import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getPersonDetails } from "../../services/tmdb/person";
import type { PersonDetails } from "../../types/tmdb";
import useLang from "../../hooks/utils/useLang";
import PageContainer from "../../components/ui/PageContainer";
import PersonPerfil from "./person-components/person-perfil/PersonPerfil";
import PersonBiography from "./person-components/person-biography/PersonBiography";
import KnownFor from "./person-components/known-for/KnownFor";
import PersonProjectsWrapper from "./person-components/person-projects/PersonProjects";
import filterCredits from "../../utils/tmdb/filterCredits";

export default function PersonPage() {

    const { id } = useParams()
    
    const navigate = useNavigate()

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
        let ignore = false

        async function load() {

            if (!id) return

            setLoading(true)
            setPerson(null)

            try {
                const person = await getPersonDetails(id, lang)

                await new Promise(resolve => setTimeout(resolve, 500))

                if (!ignore) {
                    setPerson(person)
                }
            } catch (error) {
                console.error("Failed to fetch person details:", error)
                if (!ignore) {
                    navigate("/404", {
                        replace: true, state: { title: 'personNotFound', subtitle: 'personNotFoundSubtitle' }
                    })
                }
            } finally {
                if (!ignore) {
                    setLoading(false)
                }
            }
        }

        load()

        return () => {
            ignore = true
        }
    }, [id, lang])

    return (
        <PageContainer>
            <div className="size-full lg:max-h-full flex flex-col lg:flex-row gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 lg:relative">
                <PersonPerfil person={person} credits={filteredCredits} loading={loading} />
                <div className="lg:w-full lg:min-w-0 flex flex-col gap-7 sm:gap-8 md:gap-9 lg:gap-6 xl:gap-7 2xl:gap-8">
                    <PersonBiography person={person} credits={filteredCredits} loading={loading} />
                    <KnownFor credits={filteredCredits} loading={loading} />
                    <PersonProjectsWrapper projects={filteredCredits} loading={loading} />
                </div>
            </div>
        </PageContainer>
    )
}