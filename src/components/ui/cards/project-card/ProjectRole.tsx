import { useTranslate } from "../../../../translations/Translations"

export default function ProjectRole({ role }: { role: string }) {

    const { line } = useTranslate()

    const roles = role.split(/\/|,/).map(role => role.trim()).filter(Boolean)

    const others = `${line('and')} ${roles.length - 1} ${(roles.length - 1) > 1 ? line('others') : line('others').slice(0, -1)}`

    return (
        <p className="text-[10px] font-medium tracking-wide leading-3.5 text-zinc-500 dark:text-zinc-400">{line('roleAs')} {roles[0]} {roles.length > 1 && others}</p>
    )
}