const getTmdbLanguage = (lang: string) => {

    switch (lang) {
        case 'en':
            return 'en-US'

        case 'es':
            return 'es-ES'

        default:
            return 'pt-BR'
    }
}

export default getTmdbLanguage