import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonDetails } from "../../services/tmdb/tmdb.services";
import type { PersonDetails } from "../../types/tmdb";
import useLang from "../../hooks/useLang";
import PageContainer from "../../components/ui/PageContainer";
import PersonPerfil from "./person-components/person-perfil/PersonPerfil";
import PersonBiography from "./person-components/PersonBiography";
import KnownFor from "./person-components/known-for/KnownFor";
import PersonProjectsWrapper from "./person-components/person-projects/PersonProjects";
import filterCredits from "../../utils/tmdb/filterCredits";

export default function PersonPage() {

    const { id } = useParams()

    const [person, setPerson] = useState<PersonDetails | null>(null)

    const lang = useLang()

    const credits = [
        ...(person?.combined_credits.cast ?? []),
        ...(person?.combined_credits.crew ?? [])
    ]

    const filteredCredits = filterCredits(credits)

    useEffect(() => {

        if (!id) return

        getPersonDetails(id, lang).then(setPerson)

    }, [id, lang])

    if (!person) return

    return (
        <PageContainer>
            <div className="size-full lg:max-h-full flex flex-col lg:flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-10 lg:relative">
                <PersonPerfil person={person} />
                <div className="lg:w-full lg:min-w-0 flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-6 xl:gap-7 2xl:gap-8 lg:overflow-y-auto">
                    <PersonBiography person={person} biography={person.biography} />
                    <KnownFor credits={person.combined_credits.cast} />
                    <PersonProjectsWrapper projects={filteredCredits} />
                </div>
            </div>
        </PageContainer>
    )
}