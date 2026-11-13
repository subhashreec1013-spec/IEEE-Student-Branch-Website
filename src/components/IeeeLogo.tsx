import logo from "../assets/ieee-logo.png";
import logoWhite from "../assets/ieee-logo-white.png";
import emblem from "../assets/ieee-emblem.png";
import emblemWhite from "../assets/ieee-emblem-white.png";

export interface IeeeLogoProps {
  className?: string;
  variant?: "default" | "white" | "emblem" | "emblem-white";
  alt?: string;
}

export function IeeeLogo({
  className,
  variant = "default",
  alt = "IEEE Student Branch Logo",
}: IeeeLogoProps) {
  const src =
    variant === "white"
      ? logoWhite
      : variant === "emblem"
        ? emblem
        : variant === "emblem-white"
          ? emblemWhite
          : logo;

  return (
    <img src={src} alt={alt} className={`block object-contain ${className ?? "h-12 w-auto"}`} />
  );
}
