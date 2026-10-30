import { useEffect, useRef, useState } from "react";

export default function useClickOutside<T extends HTMLElement = HTMLDivElement>() {
    const [open, setOpen] = useState(false)
    const ref = useRef<T | null>(null)

    const toggle = (option?: "open" | "close" | React.MouseEvent) => {
        if (option == 'open' || option == 'close') {
            setOpen(option == 'open' ? true : false)
        }
        else {
            setOpen((prev) => !prev)
        }
    }
    const close = () => setOpen(false)
    const openDropdown = () => setOpen(true)

    useEffect(() => {
        if (!open) return

        function handleClick(event: MouseEvent) {
            if (!ref.current?.contains(event.target as Node)) {
                close()
            }
        }

        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                close()
            }
        }

        document.addEventListener("mousedown", handleClick)
        document.addEventListener("keydown", handleEsc)

        return () => {
            document.removeEventListener("mousedown", handleClick)
            document.removeEventListener("keydown", handleEsc)
        }
    }, [open])

    return {
        ref,
        open,
        toggle,
        close,
        openDropdown,
    }
}