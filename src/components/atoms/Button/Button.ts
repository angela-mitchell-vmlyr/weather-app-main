export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export function createButton(props: ButtonProps): string {
  const { text, variant = 'primary', disabled = false } = props;
  
  const baseClass = 'button';
  const variantClass = `${baseClass}--${variant}`;
  const disabledClass = disabled ? `${baseClass}--disabled` : '';
  
  return `
    <button 
      class="${baseClass} ${variantClass} ${disabledClass}"
      ${disabled ? 'disabled' : ''}
      type="button"
    >
      ${text}
    </button>
  `;
}
