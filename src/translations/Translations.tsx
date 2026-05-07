import { useContext } from "react"
import { Contexts } from "../contexts/ContextsProvider"

export const Translations = {
    header: {
        homeLink: {
            pt: 'Início',
            en: 'Home',
            es: 'Inicio'
        },
        moviesLink: {
            pt: 'Filmes',
            en: 'Movies',
            es: 'Películas'
        },
        seriesLink: {
            pt: 'Séries',
            en: 'Series',
            es: 'Series'
        },
        artistsLink: {
            pt: 'Artistas',
            en: 'Artists',
            es: 'Artistas'
        },
        searchPlaceholder: {
            pt: 'Buscar...',
            en: 'Search...',
            es: 'Buscar...'
        }
    },
    mobileMenu: {
        viewProfile: {
            pt: 'Ver perfil',
            en: 'View profile',
            es: 'Ver perfil'
        },
        signOut: {
            pt: 'Sair',
            en: 'Sign out',
            es: 'Cerrar sesión'
        }
    },
    home: {
        nowPlaying: {
            pt: 'Em cartaz',
            en: 'Now Playing',
            es: 'En cartelera'
        },
        sliderTrailer: {
            pt: 'Assistir trailer',
            en: 'Watch Trailer',
            es: 'Ver tráiler'
        },
        trendingMovies: {
            pt: 'Filmes em Alta',
            en: 'Trending Movies',
            es: 'Películas en Tendencia'
        }
    }
}

export function useTranslate() {

    const context = useContext(Contexts)
    const { lang } = context!

    function getText(content: string) {
        const sections = Object.values(Translations)
        const block = sections.find(section => content in section)
        return (block as any)?.[content]?.[lang] ?? ''
    }

    function line(content: string) {
        return getText(content)
    }

    function br(content: string) {
        return getText(content)
            .split(/(\\n|\\m|\\d)/)
            .map((part: string, i: number) => {
                if (part === "\\n") return <br key={i} />
                if (part === "\\m") return <br key={i} className="lg:hidden" />
                if (part === "\\d") return <br key={i} className="hidden lg:block" />

                return <span key={i}>{part}</span>
            })
    }

    return { line, br }
}