import OptionDesc from "./components/OptionDesc";
import OptionTitle from "./components/OptionTitle";

export default function OptionInfo({ title, desc, fixed }: { title: string, desc: string | null, fixed: boolean }) {
    return (
        <div className="flex flex-col gap-0.5">
            <OptionTitle title={title} fixed={fixed} />
            <OptionDesc desc={desc} fixed={fixed} />
        </div>
    )
}