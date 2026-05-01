export default function MenuLink({ title, href, index }: { title: string, href: string, index: number }) {
    return (
        <a href={href} className={`${index == 0 ? 'text-zinc-700 dark:text-white bg-white dark:bg-zinc-950/30' : 'text-zinc-600 dark:text-zinc-200'} w-full h-14 flex items-center px-6 rounded-2xl text-base font-medium tracking-wider leading-none`}>{title}</a>
    )
}