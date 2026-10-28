export type DiferencialItem = {
  label: string;
  value: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  specLabel: string;
  specValue: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  car: string;
  quote: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  caption: string;
};

export const WHATSAPP_NUMBER = "5511988887766";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação para o meu Porsche.";

export const siteContent = {
  hero: {
    eyebrow: "Ateliê especializado em Porsche",
    headline: "Cada boxer merece um especialista que conhece seu ritmo.",
    subheadline:
      "Manutenção, restauração e preparação exclusivas para Porsche, na Vila Leopoldina, São Paulo.",
    image: "/images/hero.jpg",
  },
  sobre: {
    title: "Um ateliê, uma marca, uma obsessão",
    body: "O Boxer Atelier nasceu da convicção de que um Porsche não deveria ser tratado como qualquer carro. Depois de anos em concessionária oficial, reunimos uma equipe pequena e dedicada exclusivamente à marca — sem diluir atenção entre modelos e fabricantes diferentes. Cada intervenção é feita por quem entende o motor boxer por dentro.",
    image: "/images/sobre.jpg",
  },
  diferenciais: [
    {
      label: "DIAGNÓSTICO",
      value: "Scanner original de fábrica",
      description: "Mesmo equipamento usado em concessionária, sem adaptações genéricas.",
    },
    {
      label: "EQUIPE",
      value: "100% dedicada à Porsche",
      description: "Técnicos certificados, sem rotatividade entre outras marcas.",
    },
    {
      label: "LOGÍSTICA",
      value: "Busca e entrega discretas",
      description: "Transporte próprio, sem exposição do veículo em pátio aberto.",
    },
    {
      label: "TRANSPARÊNCIA",
      value: "Relatório fotográfico completo",
      description: "Documentação de cada etapa, enviada diretamente ao cliente.",
    },
  ] satisfies DiferencialItem[],
  servicos: [
    {
      id: "manutencao",
      title: "Manutenção Preventiva",
      description: "Revisões programadas com peças originais e diagnóstico eletrônico completo.",
      specLabel: "PRAZO MÉDIO",
      specValue: "1 dia útil",
    },
    {
      id: "restauracao",
      title: "Restauração Completa",
      description: "Recuperação estrutural, mecânica e estética de modelos clássicos.",
      specLabel: "PRAZO MÉDIO",
      specValue: "90–180 dias",
    },
    {
      id: "performance",
      title: "Preparação de Performance",
      description: "Ajustes de motor, suspensão e escape para uso em pista ou estrada.",
      specLabel: "PRAZO MÉDIO",
      specValue: "15–30 dias",
    },
    {
      id: "funilaria",
      title: "Funilaria e Pintura Especializada",
      description: "Reparo estrutural e pintura com padrão de cor de fábrica.",
      specLabel: "PRAZO MÉDIO",
      specValue: "10–20 dias",
    },
    {
      id: "revisao",
      title: "Revisão Pré-Compra",
      description: "Inspeção de 120 pontos antes da aquisição de um Porsche usado.",
      specLabel: "PRAZO MÉDIO",
      specValue: "4 horas",
    },
  ] satisfies ServiceItem[],
  processo: [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Inspeção completa com scanner original e checklist de 120 pontos.",
    },
    {
      step: "02",
      title: "Orçamento Transparente",
      description: "Relatório detalhado com peças, prazos e valores antes de qualquer intervenção.",
    },
    {
      step: "03",
      title: "Execução",
      description: "Trabalho realizado por um técnico dedicado, sem terceirização.",
    },
    {
      step: "04",
      title: "Relatório Fotográfico",
      description: "Documentação de cada etapa, enviada ao cliente durante o processo.",
    },
    {
      step: "05",
      title: "Entrega",
      description: "Teste de estrada e checklist final antes da devolução do veículo.",
    },
  ] satisfies ProcessStep[],
  galeria: [
    { id: "g1", image: "/images/galeria-01.jpg", alt: "Técnico ajustando motor boxer com o capô traseiro aberto", caption: "Ajuste de motor boxer" },
    { id: "g2", image: "/images/galeria-02.jpg", alt: "Mãos aplicando torque em parafuso de suspensão com torquímetro", caption: "Suspensão sob torque calibrado" },
    { id: "g3", image: "/images/galeria-03.jpg", alt: "Scanner de diagnóstico conectado à porta OBD de um Porsche", caption: "Diagnóstico eletrônico" },
    { id: "g4", image: "/images/galeria-04.jpg", alt: "Roda e pinça de freio Porsche recém-instaladas sobre bancada", caption: "Freios de alta performance" },
    { id: "g5", image: "/images/galeria-painel.jpg", alt: "Painel de instrumentos de um Porsche clássico em restauração", caption: "Restauração de painel clássico" },
    { id: "g6", image: "/images/vista-atelie.jpg", alt: "Vista geral do ateliê com elevador e ferramentas organizadas", caption: "O ateliê" },
  ] satisfies GalleryItem[],
  depoimentos: [
    {
      name: "Marcelo R.",
      car: "911 Carrera S",
      quote: "É a primeira oficina onde sinto que meu carro é tratado com o mesmo cuidado que teria na fábrica.",
    },
    {
      name: "Beatriz A.",
      car: "Cayenne Turbo",
      quote: "Transparência total no orçamento e no prazo. Nunca fui surpreendida com custo extra.",
    },
    {
      name: "Eduardo T.",
      car: "718 Cayman GTS",
      quote: "Busca e entrega discretas fazem toda a diferença para quem não tem tempo a perder.",
    },
  ] satisfies Testimonial[],
  equipe: [
    {
      name: "Rafael Bittencourt",
      role: "Fundador e Técnico-Chefe",
      bio: "18 anos de experiência, dos quais 11 em concessionária oficial Porsche.",
      image: "/images/equipe-rafael.jpg",
    },
    {
      name: "Diego Amaral",
      role: "Especialista em Motores Boxer",
      bio: "Certificado em diagnóstico eletrônico e retífica de motores flat-six.",
      image: "/images/equipe-diego-amaral.jpg",
    },
  ] satisfies TeamMember[],
  contato: {
    endereco: "Rua Cardeal Arcoverde, 1200 — Vila Leopoldina, São Paulo — SP",
    horario: "Segunda a sexta, 8h–18h · Sábado, 8h–13h",
  },
};
