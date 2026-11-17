import srmLogo from "../assets/srm-ist-logo.jpg";

export interface SrmLogoProps {
  className?: string;
  variant?: "default" | "card";
  alt?: string;
}

export function SrmLogo({
  className,
  variant = "default",
  alt = "SRM Institute of Science and Technology, Tiruchirappalli Logo",
}: SrmLogoProps) {
  if (variant === "card") {
    return (
      <span className="inline-flex shrink-0 items-center justify-center rounded bg-white px-2 py-1 shadow-xs">
        <img
          src={srmLogo}
          alt={alt}
          className={`block object-contain ${className ?? "h-7 w-auto"}`}
        />
      </span>
    );
  }

  return (
    <img
      src={srmLogo}
      alt={alt}
      className={`block object-contain ${className ?? "h-11 sm:h-12 w-auto shrink-0"}`}
    />
  );
}

export { srmLogo };
