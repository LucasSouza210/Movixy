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

    const { setSearch,cardClicked, setCardClicked } = projectsContexts!

    const { ref, open, toggle } = useClickOutside()

    useEffect(() => {
        toggle('close')
        setSearch('')
        setCardClicked(false)
    }, [cardClicked])

    return (
        <div className="size-full flex justify-center">
            <div className="w-full sm:w-3/4 lg:w-3/6 2xl:w-2/6 flex flex-col justify-center items-center relative" ref={ref}>
                <HeaderSearchField toggle={(option: 'open' | 'close') => toggle(option)} />
                <HeaderSearchDropdown open={open} />
            </div>
        </div>
    )
}

export default HeaderSearchWrapper