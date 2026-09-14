import { ImageIcon } from "lucide-react";

const PALETTES: Record<string, string> = {
  clay: "from-[#c98a5c] via-[#b06b3f] to-[#8a4f2c]",
  sand: "from-[#e8ddcd] via-[#dccbb2] to-[#c7ae8c]",
  stone: "from-[#d9d5cd] via-[#c7c1b6] to-[#aca595]",
  slate: "from-[#3a3f47] via-[#23262b] to-[#101214]",
  moss: "from-[#a9b79a] via-[#8a9a78] to-[#66765a]",
  ink: "from-[#2b2b2b] via-[#1a1a1a] to-[#0a0a0a]",
  blush: "from-[#e7c9b8] via-[#d9ac93] to-[#c08a6c]",
};

export default function PlaceholderImage({
  label,
  palette = "sand",
  className = "",
}: {
  label?: string;
  palette?: keyof typeof PALETTES;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${PALETTES[palette]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/70">
        <ImageIcon strokeWidth={1.25} className="h-6 w-6" />
        {label ? (
          <span className="px-3 text-center text-[11px] font-medium tracking-wide uppercase text-white/60">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
