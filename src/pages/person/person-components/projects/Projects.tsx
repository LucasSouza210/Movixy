import type { PersonCredit } from "../../../../types/tmdb"
import MediaListProvider from "../../../../contexts/MediaListProvider"
import Header from "./components/header/Header"
import List from "./components/list/List"

function ProjectsWrapper({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {
    return (
        <MediaListProvider list={projects}>
            <Projects projects={projects} loading={loading} />
        </MediaListProvider>
    )
}

function Projects({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {
    return (
        <div className="w-full flex flex-col border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[22px] xl:rounded-[26px] 2xl:rounded-[30px] overflow-hidden border-default">
            <Header />
            <List projects={projects} loading={loading} />
        </div>
    )
}

export default ProjectsWrapper