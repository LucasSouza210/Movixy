import Title from "../../../../ui/Title";
import Subtitle from "../../../../ui/Subtitle";

export default function ModalInfo({ edit }: { edit: boolean }) {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
            <Title text={edit ? 'editListTitle' : 'newListModalTitle'} />
            <Subtitle text={edit ? 'editListSubtitle' : 'createListSubtitle'} />
        </div>
    )
}