interface StatCardProps {
  value: string
  label: string
  description?: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/20">
      <div className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      {description && <p className="text-sm text-[var(--color-text-muted)]">{description}</p>}
    </div>
  )
}
