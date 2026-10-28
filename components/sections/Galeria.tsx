import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Galeria() {
  return (
    <section className="mx-auto max-w-[72rem] px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          O ateliê em detalhe
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {siteContent.galeria.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.08}>
            <PlaceholderImage src={item.image} alt={item.alt} className="relative aspect-[4/3] w-full" />
            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-soft">
              {item.caption}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
