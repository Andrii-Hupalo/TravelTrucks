export type IconId =
  | "logo"
  | "chevron-left"
  | "chevron-right"
  | "map"
  | "star-filled"
  | "star-empty"
  | "close"
  | "ac"
  | "shower"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "flame"
  | "water";

interface IconProps {
  id: IconId;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export default function Icon({
  id,
  size = 18,
  width,
  height,
  className,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      width={width ?? size}
      height={height ?? size}
      aria-hidden="true"
      focusable="false"
      color={color}
      className={className}
      style={{ flexShrink: 0 }}
    >
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}
