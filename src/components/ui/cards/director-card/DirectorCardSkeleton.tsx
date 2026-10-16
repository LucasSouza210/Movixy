export default function DirectorCardSkeleton({ compact }: { compact?: boolean }) {
    return (
        <span className={`w-full skeleton ${compact ? 'aspect-video rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]' : 'aspect-9/8 lg:aspect-6/5 rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px]'}`} />
    )
}