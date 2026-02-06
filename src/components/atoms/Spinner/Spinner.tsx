export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export function Spinner({ size = 'medium' }: SpinnerProps) {
  const baseClass = 'spinner';
  const sizeClass = `${baseClass}--${size}`;

  return <div className={`${baseClass} ${sizeClass}`} />;
}
