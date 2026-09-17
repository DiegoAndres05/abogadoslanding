import type { VisualVariant } from "@/data/practiceAreas";

/** CSS-only brand placeholders — no photographs. */
export const practiceAreaVisualClasses: Record<VisualVariant, string> = {
  "navy-gold-diag":
    "bg-[linear-gradient(135deg,#0F2330_0%,#1E3A4D_55%,#8a7348_100%)]",
  "gold-mesh":
    "bg-[#152835] [background-image:repeating-linear-gradient(-45deg,rgba(214,181,119,0.2)_0_2px,transparent_2px_16px)]",
  "navy-bars":
    "bg-[#0F2330] [background-image:repeating-linear-gradient(90deg,rgba(214,181,119,0.16)_0_10px,transparent_10px_32px)]",
  "charcoal-arc":
    "bg-[#152835] [background-image:radial-gradient(90%_70%_at_0%_100%,rgba(214,181,119,0.4),transparent_55%)]",
  "navy-grid":
    "bg-[#0F2330] [background-image:linear-gradient(rgba(214,181,119,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(214,181,119,0.16)_1px,transparent_1px)] [background-size:32px_32px]",
  "gold-wash":
    "bg-[linear-gradient(165deg,#0F2330_0%,#3d4f5c_50%,#c4a66a_100%)]",
  "navy-split":
    "bg-[linear-gradient(100deg,#0F2330_0_48%,#1E3A4D_48%_72%,#b89a5c_72%_100%)]",
  "ivory-edge":
    "bg-[linear-gradient(210deg,rgba(248,247,244,0.2)_0%,transparent_38%),linear-gradient(160deg,#0F2330,#1E3A4D)]",
};
