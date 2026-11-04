import Close from "./components/Close";
import Clear from "./components/Clear";
import Confirm from "./components/Confirm";

export default function Actions({ any, clean, confirm, open }: { any: boolean, clean: () => void, confirm: () => void, open: () => void }) {
    return (
        <div className={`w-full flex items-center justify-between ${any ? 'justify-end' : 'justify-between'}`}>
            {
                !any &&
                <Clear clean={clean} />
            }
            <div className="flex items-center justify-end gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3 xl:gap-3.25 2xl:gap-3.5">
                <Close />

                <Confirm confirm={confirm} open={open} />
            </div>
        </div>
    )
} 