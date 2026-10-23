import { useTranslate } from "../../../translations/Translations";
import type { MouseEventHandler } from "react";
import type { IconType } from "react-icons";

export default function BannerButton({ hasBanner, onClick, icon, label }: { hasBanner: boolean, onClick: MouseEventHandler, icon: IconType, label?: string }) {

    const { line } = useTranslate()

    const Icon = icon

    return (
        <button className={`size-8 sm:size-8.5 md:size-9 lg:size-6 xl:size-6.75 2xl:size-7.5 flex items-center justify-center cursor-pointer border rounded-full ${hasBanner ? 'action-banner border-action-banner text-action-icon' : 'action-elevated border-action text-action'}`} type="button" aria-label={label && line(label)} onClick={onClick}>
            <Icon className="size-1/2" />
        </button>
    )
}