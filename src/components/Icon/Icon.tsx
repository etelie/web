import type { TailwindValue } from "~/types"

export const Icon = ({
    width,
    height,
}: {
    width: TailwindValue,
    height: TailwindValue,
}) => (
    <img className={`tw-w-${width} tw-h-${height}`} src="/icon/etelie.svg" />
)
