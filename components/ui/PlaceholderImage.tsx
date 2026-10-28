import Image from "next/image";

export function PlaceholderImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-card bg-bg-alt ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </div>
  );
}
