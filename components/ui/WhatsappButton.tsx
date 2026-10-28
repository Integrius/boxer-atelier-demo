import { WHATSAPP_NUMBER } from "@/lib/content";

function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsappButton({
  message,
  variant = "inline",
  tone = "light",
}: {
  message: string;
  variant?: "inline" | "floating";
  tone?: "light" | "dark";
}) {
  const href = buildWhatsappLink(message);

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-card bg-accent px-5 py-3 text-sm font-medium text-surface shadow-lg transition hover:opacity-90"
      >
        Falar no WhatsApp
      </a>
    );
  }

  const toneClasses =
    tone === "dark"
      ? "border-surface text-surface hover:bg-surface hover:text-ink"
      : "border-ink text-ink hover:bg-ink hover:text-surface";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-card border px-6 py-3 text-sm font-medium transition ${toneClasses}`}
    >
      Falar no WhatsApp
    </a>
  );
}
