import Title from "./components/Title";
import Controls from "./components/controls/Controls";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-between border-b px-6 sm:px-7 md:px-8 lg:px-4 xl:px-5 2xl:px-6 py-5 sm:py-5.5 md:py-6 lg:py-3 xl:py-4 2xl:py-5 border-default bg-default">
            <Title />
            <Controls />
        </div>
    )
}