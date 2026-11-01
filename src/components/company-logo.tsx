import Image from "next/image";

const logos: Record<string, string> = {
  tekizma: "/logos/tekizma.jpg",
  asd: "/logos/asd.png",
  marlabs: "/logos/marlabs.png",
  mapview: "/logos/mapview.png",
  star4ce: "/logos/star4ce.png",
  amtex: "/logos/amtex.svg",
  "3i-infotech": "/logos/3i-infotech.png",
  asic: "/logos/asic.png",
};

export function CompanyLogo({ id }: { id: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-28 flex-none items-center justify-center rounded-lg border border-line bg-white p-1.5"
    >
      <Image src={logos[id]} alt="" width={100} height={44} unoptimized className="h-full w-full object-contain" />
    </span>
  );
}
