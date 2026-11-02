import NewList from "./components/NewList";
import Title from "./components/Title";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-between">
            <Title />
            <NewList />
        </div>
    )
}