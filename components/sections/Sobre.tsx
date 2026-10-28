import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Sobre() {
  const { title, body, image } = siteContent.sobre;

  return (
    <section className="mx-auto grid max-w-[72rem] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <Reveal>
        <PlaceholderImage src={image} alt="Fundador do ateliê observando painel de instrumentos de um Porsche" className="relative aspect-[4/5] w-full" />
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-soft">{body}</p>
      </Reveal>
    </section>
  );
}
