export function SpecStat({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-none border-t border-line pt-3">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {label}
        </span>
        <span className="font-mono text-sm text-ink">{value}</span>
      </div>
      {description && (
        <p className="mt-2 text-sm text-ink-soft">{description}</p>
      )}
    </div>
  );
}
