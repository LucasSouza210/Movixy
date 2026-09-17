import ModalInfo from "./components/modal-info/ModalInfo";
import NewListForm from "./components/new-list-form/NewListForm";

export default function NewListModal() {
    return (
        <div className="w-full sm:w-fit flex flex-col items-center gap-4 sm:gap-4.5 md:gap-5 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 rounded-[26px] sm:rounded-[28px] md:rounded-[30px] lg:rounded-3xl xl:rounded-[26px] 2xl:rounded-[28px] border bg-default border-default">
            <ModalInfo />
            <NewListForm />
        </div>
    )
}