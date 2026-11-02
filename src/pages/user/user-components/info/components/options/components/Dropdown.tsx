import { AnimatePresence, motion } from "framer-motion";
import EditPerfil from "./options/EditProfile";
import SwitchMode from "./options/SwitchMode";
import Auth from "./options/Auth";

export default function Dropdown({ open }: { open: boolean }) {
    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="w-max flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 p-3 sm:p-3.5 md:p-4 lg:p-2.5 xl:p-3 2xl:p-3.5 absolute z-40 top-10 sm:top-11.5 md:top-13 lg:top-9 xl:top-10.5 2xl:top-12 -right-4 sm:-right-5 md:-right-6 lg:-right-3 xl:-right-4 2xl:-right-5 border rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] bg-default border-default" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
                    <EditPerfil />
                    <SwitchMode />
                    <Auth />
                </motion.div>
            }
        </AnimatePresence>
    )
}