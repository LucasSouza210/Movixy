import { useAuth } from "../../../../../../../../hooks/auth/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import SignWithButton from "../../../../../../../../components/ui/form/SignWithButton";

export default function LoginPanelActions() {

    const { loginWithGoogle, loginWithFacebook } = useAuth()

    const options = [
        {
            icon: FcGoogle,
            content: 'Google',
            service: loginWithGoogle
        },
        {
            icon: FaFacebook,
            content: 'Facebook',
            service: loginWithFacebook
        }
    ]

    return (
        <div className="w-full flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            {
                options.map((item, index) => (
                    <SignWithButton icon={item.icon} content={item.content} service={item.service} key={index} />
                ))
            }
        </div>
    )
}