export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ text, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  const baseClass = 'button';
  const variantClass = `${baseClass}--${variant}`;
  const disabledClass = disabled ? `${baseClass}--disabled` : '';

  return (
    <button
      className={`${baseClass} ${variantClass} ${disabledClass}`.trim()}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
