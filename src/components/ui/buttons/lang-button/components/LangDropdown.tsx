import type { ComponentType, SVGProps } from "react"
import { AnimatePresence, motion } from "framer-motion"
import br from '../../../../../assets/flags/BR.tsx'
import us from '../../../../../assets/flags/US.tsx'
import es from '../../../../../assets/flags/SP.tsx'
import DropdownButton from "./DropdownButton.tsx"

type Lang = 'pt' | 'en' | 'es'

export default function LangDropdown({ open, close }: { open: boolean, close: () => void }) {

    const options: { lang: Lang; flag: ComponentType<SVGProps<SVGSVGElement>> }[] = [
        {
            lang: 'pt',
            flag: br
        },
        {
            lang: 'en',
            flag: us
        },
        {
            lang: 'es',
            flag: es
        },
    ]

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`min-w-max border border-default rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-xl xl:rounded-[14px] 2xl:rounded-2xl absolute z-40 top-12 sm:top-13.5 md:top-15 lg:top-8.5 xl:top-9.75 2xl:top-11 overflow-hidden bg-default`}>
                    <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 p-4 sm:p-4.5 md:p-5 lg:p-4 xl:p-4.5 2xl:p-5 bg-white dark:bg-zinc-950/30 lg:bg-white/90 lg:dark:bg-zinc-950/50">
                        {
                            options.map((i, index) => {

                                const Flag = i.flag

                                return (
                                    <DropdownButton option={i} Flag={Flag} close={close} key={index} />
                                )
                            })
                        }
                    </div>

                </motion.div>
            }
        </AnimatePresence>
    )
}