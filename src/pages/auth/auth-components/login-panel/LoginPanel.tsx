import LoginForm from "./components/LoginForm";
import LoginPanelActions from "./components/LoginPanelActions";
import LoginPanelLine from "./components/LoginPanelLine";

export default function LoginPanel() {
    return (
        <div className="w-full sm:w-fit flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <LoginForm />
            <LoginPanelLine />
            <LoginPanelActions />
        </div>
    )
}