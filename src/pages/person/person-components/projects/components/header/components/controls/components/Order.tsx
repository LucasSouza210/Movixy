import { useTranslate } from "../../../../../../../../../translations/Translations";
import { TbArrowsSort } from "react-icons/tb";
import useClickOutside from "../../../../../../../../../hooks/ui/useClickOutside";
import OrderDropdown from "../../../../../../../../../components/ui/dropdowns/order-dropdown/OrderDropdown";

export default function Order() {

    const { ref, open, toggle, close } = useClickOutside()

    const { line } = useTranslate()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center rounded-full group border border-action action-on-default" aria-label={line('ariaOpenOrder')} onClick={toggle}>
                <TbArrowsSort className="size-1/2 text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
            </button>
            <OrderDropdown open={open} close={close} />
        </div>
    )
}