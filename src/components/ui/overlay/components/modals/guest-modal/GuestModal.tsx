import Info from "./components/info/Info";
import Actions from "./components/actions/Actions";

export type GuestAction = 'like' | 'save' | 'create' | 'rate'

export default function GuestModal({ action }: { action: GuestAction }) {
    return (
        <div className="w-full sm:w-88 md:w-96 lg:w-60 xl:w-68 2xl:w-76 flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 rounded-[26px] sm:rounded-[28px] md:rounded-[30px] lg:rounded-3xl xl:rounded-[26px] 2xl:rounded-[28px] border bg-default border-default">
            <Info action={action} />
            <Actions />
        </div>
    )
}