import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


export default function UserAvatarLink() {
    return (
        <Link to='/user'>
            <FaUserCircle className="size-6 sm:size-6.5 md:size-7 lg:size-7 xl:size-8 2xl:size-9 fill-zinc-400" />
        </Link>
    )
}