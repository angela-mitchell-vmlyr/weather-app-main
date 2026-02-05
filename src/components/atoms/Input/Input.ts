export interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
}

export function createInput(props: InputProps): string {
  const { placeholder = '', value = '', type = 'text', disabled = false } = props;
  
  const baseClass = 'input';
  const disabledClass = disabled ? `${baseClass}--disabled` : '';
  
  return `
    <input 
      type="${type}"
      class="${baseClass} ${disabledClass}"
      placeholder="${placeholder}"
      value="${value}"
      ${disabled ? 'disabled' : ''}
    />
  `;
}
