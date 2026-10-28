import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Depoimentos() {
  return (
    <section className="bg-bg-alt py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Quem já confiou
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteContent.depoimentos.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <blockquote className="rounded-card bg-surface p-6">
                <p className="text-sm leading-relaxed text-ink">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-soft">
                  {item.name} · {item.car}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
