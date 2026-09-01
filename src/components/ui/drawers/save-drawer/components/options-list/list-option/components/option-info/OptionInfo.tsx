import OptionDesc from "./components/OptionDesc";
import OptionTitle from "./components/OptionTitle";

export default function OptionInfo({ title, desc, fixed }: { title: string, desc: string | null, fixed: boolean }) {
    return (
        <div className="flex flex-col gap-px sm:gap-0.5 md:gap-0.75 lg:gap-0.5 xl:gap-0.75 2xl:gap-1 pt-1 sm:pt-1.5 md:pt-2 lg:pt-1 xl:pt-1.25 2xl:pt-1.5">
            <OptionTitle title={title} fixed={fixed} />
            <OptionDesc desc={desc} fixed={fixed} />
        </div>
    )
}