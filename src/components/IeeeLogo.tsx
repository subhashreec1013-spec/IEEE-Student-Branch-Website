<<<<<<< HEAD
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
=======
export function IeeeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="IEEE emblem" fill="none">
      <path d="M24 2 46 24 24 46 2 24 24 2Z" fill="currentColor" opacity="0.12" />
      <path d="M24 2 46 24 24 46 2 24 24 2Z" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M17 30c0-6 3-10 7-10s7 4 7 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
