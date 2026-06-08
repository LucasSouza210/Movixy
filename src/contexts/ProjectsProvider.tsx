import { createContext, useState } from "react"
import type { ActorCredit } from "../types/tmdb"

type ProviderProps = {
    children: React.ReactNode
}

type ProjectsContexts = {
    filteredProjects: null | ActorCredit[]
    setFilteredProjects: React.Dispatch<React.SetStateAction<null | ActorCredit[]>>
}

export const ProjectsContexts = createContext<ProjectsContexts | null>(null)

export default function ProjectsProvider({ children }: ProviderProps) {

    const [filteredProjects, setFilteredProjects] = useState<null | ActorCredit[]>(null)

    return (
        <ProjectsContexts.Provider value={{ filteredProjects, setFilteredProjects }}>
            {children}
        </ProjectsContexts.Provider >
    )
}