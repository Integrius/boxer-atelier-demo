import { siteContent, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/content";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  const { eyebrow, headline, subheadline, image } = siteContent.hero;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <PlaceholderImage src={image} alt="Mãos técnicas trabalhando em motor Porsche no ateliê" className="absolute inset-0 rounded-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-[72rem] px-6 pb-32 pt-24 md:pb-20 md:pt-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-surface/80">
            {eyebrow}
          </p>
        </Reveal>
        <SplitHeadline
          text={headline}
          as="h1"
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-surface md:text-6xl"
        />
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-base text-surface/90">{subheadline}</p>
          <div className="mt-8">
            <WhatsappButton message={WHATSAPP_DEFAULT_MESSAGE} tone="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
