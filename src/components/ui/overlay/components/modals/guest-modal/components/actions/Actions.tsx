import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import NotNow from "./components/NotNow";

export default function Actions() {
    return (
        <div className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            <Login />
            <CreateAccount />
            <NotNow />
        </div>
    )
}