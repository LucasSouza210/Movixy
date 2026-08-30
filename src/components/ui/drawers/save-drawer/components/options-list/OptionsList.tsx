import { useContext } from "react"
import { Contexts } from "../../../../../../contexts/ContextsProvider"
import ListOption from "./list-option/ListOption"

export default function OptionsList() {

    const contexts = useContext(Contexts)

    const { userLists } = contexts!

    return (
        <div className="w-full flex flex-col gap-5">
            {
                userLists?.map((i, index) => (
                    <ListOption list={i} key={index}/>
                ))
            }
        </div>
    )
}