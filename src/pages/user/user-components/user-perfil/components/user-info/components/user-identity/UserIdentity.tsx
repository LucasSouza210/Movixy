import ProfileHandle from "./components/ProfileHandle"
import ProfileName from "./components/ProfileName"

export default function UserIdentity({ name, userName, loading }: { name: string | undefined | null, userName: string | undefined | null, loading: boolean }) {
    return (
        <div className={`h-fit flex flex-col ${loading ? 'gap-1.5 sm:gap-1.75 md:gap-2' : 'gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5'}`}>
            <ProfileName name={name} loading={loading} />
            <ProfileHandle userName={userName} loading={loading} />
        </div>
    )
}