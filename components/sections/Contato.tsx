import { siteContent, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsappButton } from "@/components/ui/WhatsappButton";

export function Contato() {
  const { endereco, horario } = siteContent.contato;

  return (
    <section id="contato" className="bg-ink py-24 text-surface">
      <div className="mx-auto max-w-[72rem] px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Agende uma avaliação
          </h2>
          <p className="mt-4 max-w-md text-sm text-surface/70">{endereco}</p>
          <p className="mt-1 text-sm text-surface/70">{horario}</p>
          <div className="mt-8">
            <WhatsappButton message={WHATSAPP_DEFAULT_MESSAGE} tone="dark" />
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-[72rem] px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-surface/40">
          Boxer Atelier — Vila Leopoldina, São Paulo
        </p>
      </div>
    </section>
  );
}
