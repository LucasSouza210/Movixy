import Clean from "./components/Clean";
import Confirm from "./components/Confirm";

export default function GenresDrawerActions({ any, clean, confirm, open }: { any: boolean, clean: () => void, confirm: () => void, open: () => void }) {
    return (
        <div className="flex items-center justify-end gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3 xl:gap-3.25 2xl:gap-3.5">
            {
                !any &&
                <Clean clean={clean} />
            }
            <Confirm confirm={confirm} open={open}/>
        </div>
    )
}