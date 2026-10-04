import { TbArrowsSort } from "react-icons/tb";
import useClickOutside from "../../../../../../../../../hooks/useClickOutside";
import OrderDropdown from "../../../../../../../../../components/ui/dropdowns/order-dropdown/OrderDropdown";

export default function OrderButton() {

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center group rounded-full border action-default border-action" onClick={toggle}>
                <TbArrowsSort className="size-1/2 text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-300 dark:group-hover:text-zinc-200" />
            </button>
            <OrderDropdown open={open} close={close} />
        </div>
    )
}