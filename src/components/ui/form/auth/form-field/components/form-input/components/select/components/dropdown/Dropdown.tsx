import { AnimatePresence, motion } from "framer-motion";
import type { SelectOption } from "../../../../../../FormField";
import Option from "./Option";
import type { SetStateAction } from "react";

export default function Dropdown({ options, selected, setSelected, open, close }: { options: SelectOption[], selected: SelectOption, setSelected: React.Dispatch<SetStateAction<SelectOption>>, open: boolean, close: () => void }) {
    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className="w-full flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 p-4 sm:p-4.5 md:p-5 lg:p-3 xl:p-3.5 2xl:p-4 absolute z-40 top-12 sm:top-13.5 md:top-15 lg:top-10 xl:top-11.5 2xl:top-13 border rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-2xl xl:rounded-[9px] 2xl:rounded-[20px] overflow-hidden bg-default border-default">
                    {
                        options.map((i, index) => (
                            <Option option={i} selected={selected} setSelected={setSelected} close={close} key={index} />
                        ))
                    }
                </motion.div>
            }
        </AnimatePresence>
    )
}