import { createContext, useState } from "react"
import type { PersonCredit } from "../types/tmdb"
import { defaultProjectFilters } from "../utils/constants"

type ProviderProps = {
    children: React.ReactNode
    projects: PersonCredit[]
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
    projects: PersonCredit[]
    setProjects: React.Dispatch<React.SetStateAction<PersonCredit[]>>
    projectFilters: ProjectFilters
    setProjectFilters: React.Dispatch<React.SetStateAction<ProjectFilters>>
    filteredProjects: null | PersonCredit[]
    setFilteredProjects: React.Dispatch<React.SetStateAction<null | PersonCredit[]>>
    sortBy: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'
    setSortBy: React.Dispatch<React.SetStateAction<'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'>>
}

export const ProjectsContexts = createContext<ProjectsContexts | null>(null)

export default function ProjectsProvider({ children, projects: initialProjects }: ProviderProps) {

    const [projects, setProjects] = useState<PersonCredit[]>(initialProjects)

    const [projectFilters, setProjectFilters] = useState<ProjectFilters>(defaultProjectFilters)

    const [filteredProjects, setFilteredProjects] = useState<null | PersonCredit[]>(null)

    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'>('newest')

    return (
        <ProjectsContexts.Provider value={{ projects, setProjects, filteredProjects, setFilteredProjects, projectFilters, setProjectFilters, sortBy, setSortBy }}>
            {children}
        </ProjectsContexts.Provider >
    )
}