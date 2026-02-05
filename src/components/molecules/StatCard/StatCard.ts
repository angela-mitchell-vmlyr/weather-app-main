export interface StatCardProps {
  label: string;
  value: string;
  variant?: 'default' | 'highlighted';
}

export function createStatCard(props: StatCardProps): string {
  const { label, value, variant = 'default' } = props;
  
  const baseClass = 'stat-card';
  const variantClass = variant !== 'default' ? `${baseClass}--${variant}` : '';
  
  return `
    <div class="${baseClass} ${variantClass}">
      <div class="${baseClass}__label">${label}</div>
      <div class="${baseClass}__value">${value}</div>
    </div>
  `;
}
