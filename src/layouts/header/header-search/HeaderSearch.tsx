import { useContext, useEffect } from "react";
import HeaderSearchProvider, { HeaderSearchContexts } from "../../../contexts/HeaderSearchProvider";
import HeaderSearchField from "./search-field/HeaderSearchField";
import useClickOutside from "../../../hooks/useClickOutside";
import HeaderSearchDropdown from "./header-search-dropdown/HeaderSearchDropdown";

function HeaderSearchWrapper() {
    return (
        <HeaderSearchProvider>
            <HeaderSearch />
        </HeaderSearchProvider>
    )
}

function HeaderSearch() {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search, searchOpen } = projectsContexts!

    const { ref, open, toggle } = useClickOutside()

    useEffect(() => {
        if (search !== '') {
            !open && toggle('open')
        }
        else {
            toggle('close')
        }
    }, [search])

    return (
        <div className={`size-full flex flex-col justify-center relative ${searchOpen ? 'items-center' : 'items-end lg:items-center'}`} ref={ref}>
            <HeaderSearchField />
            <HeaderSearchDropdown open={open} />
        </div>
    )
}

export default HeaderSearchWrapper