export default function Banner({ path }: { path: string }) {
    return (
        <img src={path} alt="" decoding="async" className="size-full object-cover" />
    )
}