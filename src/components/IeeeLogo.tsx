import logo from "../assets/ieee-logo.png";

export function IeeeLogo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="IEEE Student Branch Logo"
      className={`block object-contain ${className ?? ""}`}
    />
  );
}