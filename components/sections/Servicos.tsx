import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SpecStat } from "@/components/ui/SpecStat";

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-[72rem] px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Serviços
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {siteContent.servicos.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 0.08}>
            <h3 className="font-display text-lg font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {service.description}
            </p>
            <div className="mt-6">
              <SpecStat label={service.specLabel} value={service.specValue} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
