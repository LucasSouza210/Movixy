import Handle from "./components/Handle";
import Name from "./components/Name";

export default function Identity({ name, userName, loading }: { name: string | undefined | null, userName: string | undefined | null, loading: boolean }) {
    return (
        <div className={`h-fit flex flex-col ${loading ? 'gap-1.5 sm:gap-1.75 md:gap-2' : 'gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2'}`}>
            <Name name={name} loading={loading} />
            <Handle userName={userName} loading={loading} />
        </div>
    )
}