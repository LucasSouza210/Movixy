import Change from "./components/Change"
import Exclude from "./components/Exclude"

type ActionsProps = {
    hasBanner: boolean
    onChangeBanner: () => void
    onRemoveBanner: () => void
}

export default function Actions({ hasBanner, onChangeBanner, onRemoveBanner, }: ActionsProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            <Change hasBanner={hasBanner} change={onChangeBanner} />
            {
                hasBanner &&
                <Exclude exclude={onRemoveBanner} />
            }
        </div>
    )
}