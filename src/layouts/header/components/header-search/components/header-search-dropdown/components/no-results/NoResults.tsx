import ListLayout from "../search-list/ListLayout"
import Message from "./components/message/Message"
import Title from "./components/Title"

export default function NoResults() {
    return (
        <div className="w-full flex relative">
            <ListLayout />
            <div className="size-full absolute flex flex-col items-start justify-start z-20">
                <Title />
                <Message />
            </div>
        </div>
    )
}