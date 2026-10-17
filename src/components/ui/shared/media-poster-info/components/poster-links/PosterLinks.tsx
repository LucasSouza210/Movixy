import PageLink from "./links/PageLink";
import TrailerLink from "./links/TrailerLink";

export default function PosterLinks({ id, type }: { id: number | undefined, type: string | undefined }) {
    return (
        <div className="flex items-center gap-3.5 sm:gap-4.25 md:gap-5 lg:gap-3 xl:gap-3.75 2xl:gap-4.5">
            <TrailerLink id={id} type={type} />
            <PageLink id={id} type={type} />
        </div>
    )
}