export default function useFormattedRate(rate: number) {
    const truncated = Math.trunc(rate * 10) / 10
    return truncated.toFixed(1)
}