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
        },
        trendingSeries: {
            pt: 'Séries em Alta',
            en: 'Trending Series',
            es: 'Series en Tendencia'
        },
        popularActors: {
            pt: 'Atores Populares',
            en: 'Popular Actors',
            es: 'Actores Populares'
        },
        projects: {
            pt: 'Projetos',
            en: 'Projects',
            es: 'Proyectos'
        },
        behindTheCamera: {
            pt: 'Por Trás das Câmeras',
            en: 'Behind the Camera',
            es: 'Detrás de las Cámaras'
        }
    },
    mediaPage: {
        mediaTrailer: {
            pt: 'Ver trailer',
            en: 'Watch trailer',
            es: 'Ver tráiler'
        },
        saveMedia: {
            pt: 'Minha lista',
            en: 'My List',
            es: 'Mi lista'
        },
        mediaOverview: {
            pt: 'Sinopse',
            en: 'Overview',
            es: 'Sinopsis'
        },
        readMore: {
            pt: 'Ler mais',
            en: 'Read more',
            es: 'Leer más'
        },
        readLess: {
            pt: 'Ler menos',
            en: 'Read less',
            es: 'Leer menos'
        },
        mediaCast: {
            pt: 'Elenco',
            en: 'Cast',
            es: 'Reparto'
        },
        movieDirection: {
            pt: 'Direção',
            en: 'Direction',
            es: 'Dirección'
        },
        movieBudget: {
            pt: 'Orçamento',
            en: 'Budget',
            es: 'Presupuesto'
        },
        movieRevenue: {
            pt: 'Bilheteria',
            en: 'Box Office',
            es: 'Taquilla'
        },
        showCreation: {
            pt: 'Criação',
            en: 'Created By',
            es: 'Creación'
        },
        showSeasons: {
            pt: 'Temporadas',
            en: 'Seasons',
            es: 'Temporadas'
        },
        showEpisodes: {
            pt: 'Episódios',
            en: 'Episodes',
            es: 'Episodios'
        },
        notInformed: {
            pt: 'Não informado',
            en: 'Not informed',
            es: 'No informado'
        },
        season: {
            pt: 'Temporada',
            en: 'Season',
            es: 'Temporada'
        },
        seasons: {
            pt: 'Temporadas',
            en: 'Seasons',
            es: 'Temporadas'
        },
        userRatingTitle: {
            pt: 'Sua avaliação',
            en: 'Your rating',
            es: 'Tu calificación'
        },
        userRatingSubtitle: {
            pt: 'Toque em uma estrela para avaliar',
            en: 'Tap a star to rate',
            es: 'Toca una estrella para calificar'
        },
        youMayAlsoLike: {
            pt: "Você também pode gostar",
            en: "You May Also Like",
            es: "También te puede gustar"
        }
    },
    actorPage: {
        biographyTitle: {
            pt: "Biografia",
            en: "Biography",
            es: "Biografía"
        },
        knownForTitle: {
            pt: "Conhecido por",
            en: "Known For",
            es: "Conocido por"
        },
        noBiography: {
            pt: "Nenhuma biografia está disponível neste idioma.",
            en: "No biography is available in this language.",
            es: "No hay una biografía disponible en este idioma."
        },
        actorProjects: {
            pt: "Projetos",
            en: "Projects",
            es: "Proyectos"
        },
        and: {
            pt: "e",
            en: "and",
            es: "y"
        },
        others: {
            pt: "outros",
            en: "others",
            es: "otros"
        },
        roleAs: {
            pt: "Como",
            en: "As",
            es: "Como"
        },
        unknownRole: {
            pt: "Papel não informado",
            en: "Role not specified",
            es: "Papel no especificado"
        },
        genres: {
            pt: "Gêneros",
            en: "Genres",
            es: "Géneros"
        },
        mediaType: {
            pt: "Tipo de mídia",
            en: "Media Type",
            es: "Tipo de medio"
        },
        all: {
            pt: "Todos",
            en: "All",
            es: "Todos"
        },
        movies: {
            pt: "Filmes",
            en: "Movies",
            es: "Películas"
        },
        tvShows: {
            pt: "Séries",
            en: "TV Shows",
            es: "Series"
        },
        rating: {
            pt: "Avaliação",
            en: "Rating",
            es: "Calificación"
        },
        from: {
            pt: "De",
            en: "From",
            es: "Desde"
        },
        to: {
            pt: "Até",
            en: "To",
            es: "Hasta"
        },
        rateError: {
            pt: "A nota máxima não pode ser menor que a nota mínima.",
            en: "The maximum rating cannot be lower than the minimum rating.",
            es: "La calificación máxima no puede ser inferior a la calificación mínima."
        },
        noProjectsFound: {
            pt: "Nenhuma mídia corresponde aos filtros aplicados.",
            en: "No media matches the applied filters.",
            es: "Ningún contenido coincide con los filtros aplicados."
        },
        clearFilters: {
            pt: "Limpar filtros",
            en: "Clear filters",
            es: "Limpiar filtros"
        },
        viewAll: {
            pt: "Ver tudo",
            en: "View all",
            es: "Ver todo"
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