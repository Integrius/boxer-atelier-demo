import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Equipe() {
  return (
    <section className="mx-auto max-w-[72rem] px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Equipe
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        {siteContent.equipe.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1}>
            <PlaceholderImage src={member.image} alt={`Retrato de ${member.name}`} className="relative aspect-[4/5] w-full max-w-xs" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              {member.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {member.role}
            </p>
            <p className="mt-2 max-w-sm text-sm text-ink-soft">{member.bio}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
