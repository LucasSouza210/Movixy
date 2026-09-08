import { useUserInfo } from "../../../../hooks/useUserInfo";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


export default function UserAvatarLink() {

    const { avatarUrl, name } = useUserInfo()

    return (
        <Link to='/user'>
            <div className={`flex size-6 sm:size-6.5 md:size-7 lg:size-7 xl:size-8 2xl:size-9 ${avatarUrl && 'border border-default rounded-full overflow-hidden'}`}>
                {
                    avatarUrl ?
                        <img src={avatarUrl} alt="" className="size-full object-cover" />
                        :
                        <FaUserCircle className="size-full fill-zinc-400" />
                }
            </div>
        </Link>
    )
}