import { createContext, useEffect, useState } from "react"
import type { ActorCredit } from "../types/tmdb"
import { defaultProjectFilters } from "../utils/constants"

type ProviderProps = {
    children: React.ReactNode
    projects: ActorCredit[]
}

type ProjectFilters = {
    type: string
    genres: number[]
    rate: {
        min: number | null
        max: number | null
        error: null | string
    }
}

type ProjectsContexts = {
    projects: ActorCredit[]
    setProjects: React.Dispatch<React.SetStateAction<ActorCredit[]>>
    projectFilters: ProjectFilters
    setProjectFilters: React.Dispatch<React.SetStateAction<ProjectFilters>>
    filteredProjects: null | ActorCredit[]
    setFilteredProjects: React.Dispatch<React.SetStateAction<null | ActorCredit[]>>
}

export const ProjectsContexts = createContext<ProjectsContexts | null>(null)

export default function ProjectsProvider({ children, projects: initialProjects }: ProviderProps) {

    const [projects, setProjects] = useState<ActorCredit[]>([])

    const [projectFilters, setProjectFilters] = useState<ProjectFilters>(defaultProjectFilters)

    const [filteredProjects, setFilteredProjects] = useState<null | ActorCredit[]>(null)

    useEffect(() => {
        setProjects(initialProjects)
    }, [initialProjects])

    useEffect(() => {
        console.log(projects)
    }, [projects])

    return (
        <ProjectsContexts.Provider value={{ projects, setProjects, filteredProjects, setFilteredProjects, projectFilters, setProjectFilters }}>
            {children}
        </ProjectsContexts.Provider >
    )
}