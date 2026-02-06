export interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function Input({
  placeholder = '',
  value = '',
  type = 'text',
  disabled = false,
  onChange,
  onKeyUp,
}: InputProps) {
  const baseClass = 'input';
  const disabledClass = disabled ? `${baseClass}--disabled` : '';

  return (
    <input
      type={type}
      className={`${baseClass} ${disabledClass}`.trim()}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
}
