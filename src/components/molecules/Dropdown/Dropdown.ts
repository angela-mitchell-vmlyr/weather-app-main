export interface DropdownOption {
  label: string;
  value: string;
  selected?: boolean;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  variant?: 'single' | 'multi';
  placeholder?: string;
  icon?: string;
}

export function createDropdown(props: DropdownProps): string {
  const { 
    label, 
    options, 
    variant = 'single',
    placeholder = 'Select...',
    icon = '⚙️'
  } = props;
  
  const baseClass = 'dropdown';
  const selectedOptions = options.filter(opt => opt.selected);
  const displayText = selectedOptions.length > 0 
    ? selectedOptions.map(opt => opt.label).join(', ')
    : placeholder;
  
  return `
    <div class="${baseClass}" data-variant="${variant}">
      <button 
        class="${baseClass}__trigger" 
        aria-haspopup="true"
        aria-expanded="false"
        type="button"
      >
        <span class="${baseClass}__icon">${icon}</span>
        <span class="${baseClass}__label">${label}</span>
        <svg class="${baseClass}__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <div class="${baseClass}__menu" role="menu" aria-hidden="true">
        <div class="${baseClass}__menu-content">
          ${variant === 'multi' ? renderMultiSelectOptions(options, baseClass) : renderSingleSelectOptions(options, baseClass)}
        </div>
      </div>
    </div>
  `;
}

function renderSingleSelectOptions(options: DropdownOption[], baseClass: string): string {
  return options.map(option => `
    <button 
      class="${baseClass}__option ${option.selected ? `${baseClass}__option--selected` : ''}"
      role="menuitemradio"
      aria-checked="${option.selected ? 'true' : 'false'}"
      data-value="${option.value}"
      type="button"
    >
      <span class="${baseClass}__option-label">${option.label}</span>
      ${option.selected ? `<svg class="${baseClass}__check" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>` : ''}
    </button>
  `).join('');
}

function renderMultiSelectOptions(options: DropdownOption[], baseClass: string): string {
  return options.map(option => `
    <button 
      class="${baseClass}__option ${option.selected ? `${baseClass}__option--selected` : ''}"
      role="menuitemcheckbox"
      aria-checked="${option.selected ? 'true' : 'false'}"
      data-value="${option.value}"
      type="button"
    >
      <span class="${baseClass}__option-label">${option.label}</span>
      ${option.selected ? `<svg class="${baseClass}__check" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>` : ''}
    </button>
  `).join('');
}
