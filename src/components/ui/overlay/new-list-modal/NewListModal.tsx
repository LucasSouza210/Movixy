import ModalInfo from "./components/modal-info/ModalInfo";
import NewListForm from "./components/new-list-form/NewListForm";

export default function NewListModal() {
    return (
        <div className="w-full sm:w-fit flex p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 rounded-[26px] sm:rounded-[28px] md:rounded-[30px] lg:rounded-3xl xl:rounded-[26px] 2xl:rounded-[28px] border bg-default border-default">
            <div className="w-full sm:w-66 md:w-72 lg:w-60 xl:w-66 2xl:w-72 flex flex-col items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                <ModalInfo />
                <NewListForm />
            </div>
        </div>
    )
}