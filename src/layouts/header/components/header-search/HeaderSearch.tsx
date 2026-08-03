import { useContext, useEffect } from "react";
import HeaderSearchProvider, { HeaderSearchContexts } from "../../../../contexts/HeaderSearchProvider";
import HeaderSearchField from "./components/search-field/HeaderSearchField";
import useClickOutside from "../../../../hooks/useClickOutside";
import HeaderSearchDropdown from "./components/header-search-dropdown/HeaderSearchDropdown";

function HeaderSearchWrapper() {
    return (
        <HeaderSearchProvider>
            <HeaderSearch />
        </HeaderSearchProvider>
    )
}

function HeaderSearch() {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { setSearch, cardClicked, setCardClicked } = projectsContexts!

    const { ref, open, toggle } = useClickOutside()

    useEffect(() => {
        toggle('close')
        setSearch('')
        setCardClicked(false)
    }, [cardClicked])

    return (
        <div className="size-full flex justify-center">
            <div className="w-full lg:w-72 xl:w-86 2xl:w-100 flex flex-col justify-center items-center relative" ref={ref}>
                <HeaderSearchField toggle={(option: 'open' | 'close') => toggle(option)} />
                <HeaderSearchDropdown open={open} />
            </div>
        </div>
    )
}

export default HeaderSearchWrapper