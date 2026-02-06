export interface StatCardProps {
  label: string;
  value: string;
  variant?: 'default' | 'highlighted';
}

export function StatCard({ label, value, variant = 'default' }: StatCardProps) {
  const baseClass = 'stat-card';
  const variantClass = variant !== 'default' ? `${baseClass}--${variant}` : '';

  return (
    <div className={`${baseClass} ${variantClass}`.trim()}>
      <div className={`${baseClass}__label`}>{label}</div>
      <div className={`${baseClass}__value`}>{value}</div>
    </div>
  );
}
