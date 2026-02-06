import { useState, useRef, useEffect } from 'react';

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
  onSelect?: (value: string) => void;
  onChange?: (values: string[]) => void;
}

export function Dropdown({
  label,
  options,
  variant = 'single',
  icon = '⚙️',
  onSelect,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    options.filter((opt) => opt.selected).map((opt) => opt.value)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const baseClass = 'dropdown';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    if (variant === 'single') {
      setSelectedValues([value]);
      setIsOpen(false);
      onSelect?.(value);
    } else {
      const updated = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(updated);
      onChange?.(updated);
    }
  };

  return (
    <div className={baseClass} data-variant={variant} ref={dropdownRef}>
      <button
        className={`${baseClass}__trigger`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={handleTriggerClick}
      >
        <span className={`${baseClass}__icon`}>{icon}</span>
        <span className={`${baseClass}__label`}>{label}</span>
        <svg
          className={`${baseClass}__chevron`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`${baseClass}__menu`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className={`${baseClass}__menu-content`}>
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <button
                key={option.value}
                className={`${baseClass}__option ${isSelected ? `${baseClass}__option--selected` : ''}`}
                role={variant === 'single' ? 'menuitemradio' : 'menuitemcheckbox'}
                aria-checked={isSelected}
                data-value={option.value}
                type="button"
                onClick={() => handleOptionClick(option.value)}
              >
                <span className={`${baseClass}__option-label`}>{option.label}</span>
                {isSelected && (
                  <svg
                    className={`${baseClass}__check`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
