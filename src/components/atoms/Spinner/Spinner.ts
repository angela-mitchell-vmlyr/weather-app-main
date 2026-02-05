export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export function createSpinner(props: SpinnerProps = {}): string {
  const { size = 'medium' } = props;
  
  const baseClass = 'spinner';
  const sizeClass = `${baseClass}--${size}`;
  
  return `
    <div class="${baseClass} ${sizeClass}"></div>
  `;
}
