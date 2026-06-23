import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActorDetails } from "../../services/tmdb/tmdb.services";
import type { ActorDetails } from "../../types/tmdb";
import useLang from "../../hooks/useLang";
import PageContainer from "../../components/ui/PageContainer";
import ActorPerfil from "./actor-components/actor-perfil/ActorPerfil";
import ActorBiography from "./actor-components/ActorBiography";
import KnownFor from "./actor-components/known-for/KnownFor";
import ActorProjectsWrapper from "./actor-components/actor-projects/ActorProjects";

export default function ActorPage() {

    const { id } = useParams()

    const [actor, setActor] = useState<ActorDetails | null>(null)

    const lang = useLang()

    useEffect(() => {

        if (!id) return

        getActorDetails(id, lang).then(setActor)

    }, [id, lang])

    if (!actor) return

    return (
        <PageContainer>
            <div className="size-full lg:max-h-full flex flex-col lg:flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-10 lg:relative">
                <ActorPerfil actor={actor} />
                <div className="lg:w-full lg:min-w-0 flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-6 xl:gap-7 2xl:gap-8 lg:overflow-y-auto">
                    <ActorBiography actor={actor} biography={actor.biography} />
                    <KnownFor credits={actor.combined_credits.cast} />
                    <ActorProjectsWrapper projects={actor.combined_credits.cast} />
                </div>
            </div>
        </PageContainer>
    )
}