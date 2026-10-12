import { FaStar, FaRegStar } from "react-icons/fa";

export default function Star() {

    const rated = false

    const Icon = rated ? FaStar : FaRegStar

    return (
        <button className=" flex">
            <Icon className={`size-5 ${rated ? 'text-yellow-500' : 'text-default'}`} />
        </button>
    )
}