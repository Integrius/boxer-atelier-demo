import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Servicos } from "@/components/sections/Servicos";
import { Processo } from "@/components/sections/Processo";
import { Galeria } from "@/components/sections/Galeria";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Equipe } from "@/components/sections/Equipe";
import { Contato } from "@/components/sections/Contato";
import { WhatsappButton } from "@/components/ui/WhatsappButton";
import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Diferenciais />
      <Servicos />
      <Processo />
      <Galeria />
      <Depoimentos />
      <Equipe />
      <Contato />
      <WhatsappButton message={WHATSAPP_DEFAULT_MESSAGE} variant="floating" />
    </main>
  );
}
