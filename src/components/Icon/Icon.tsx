export const Icon = ({
    width,
    height,
}: {
    width: number | string,
    height: number | string,
}) => (
    <img className={`tw-w-${width} tw-h-${height}`} src="/icon/etelie.svg" />
)
