import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <a
      href="#trust"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
      aria-label="Scroll down"
    >
      <span className="text-xs font-medium uppercase tracking-widest">
        Descubre más
      </span>
      <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
    </a>
  );
}
