import type { TailwindValue } from "~/types"

export const Icon = ({
    width,
    height,
}: {
    width: TailwindValue,
    height: TailwindValue,
}) => (
    <div className={`tw-w-${width} tw-h-${height}`}>
        <img className="tw-w-full tw-h-full" src="/icon/etelie.svg" />
    </div>
)
