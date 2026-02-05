export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  loading?: boolean;
  error?: string;
  onSearch?: (value: string) => void;
}

export function createSearchBar(props: SearchBarProps): string {
  const { 
    placeholder = 'Search for a place...', 
    value = '', 
    loading = false,
    error = ''
  } = props;
  
  const baseClass = 'search-bar';
  
  return `
    <div class="${baseClass}">
      <div class="${baseClass}__input-group">
        <input 
          type="text" 
          class="${baseClass}__input"
          placeholder="${placeholder}"
          value="${value}"
          ${loading ? 'disabled' : ''}
        />
        <button 
          class="${baseClass}__button"
          ${loading ? 'disabled' : ''}
        >
          Search
        </button>
      </div>
      ${error ? `<div class="${baseClass}__error">${error}</div>` : ''}
    </div>
  `;
}
