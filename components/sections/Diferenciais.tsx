import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SpecStat } from "@/components/ui/SpecStat";

export function Diferenciais() {
  return (
    <section className="bg-bg-alt py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Por que confiar seu Porsche a este ateliê
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {siteContent.diferenciais.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <SpecStat label={item.label} value={item.value} description={item.description} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
