import RegisterForm from "./components/register-form/RegisterForm";

export default function RegisterPanel() {
    return (
        <div className="w-full sm:w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <RegisterForm />
        </div>
    )
}