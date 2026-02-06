export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  loading?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

export function SearchBar({
  placeholder = 'Search for a place...',
  value = '',
  loading = false,
  error = '',
  onChange,
  onSearch,
}: SearchBarProps) {
  const baseClass = 'search-bar';

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__input-group`}>
        <input
          type="text"
          className={`${baseClass}__input`}
          placeholder={placeholder}
          value={value}
          disabled={loading}
          onChange={onChange}
          onKeyUp={handleKeyUp}
        />
        <button
          className={`${baseClass}__button`}
          disabled={loading}
          onClick={onSearch}
        >
          Search
        </button>
      </div>
      {error && <div className={`${baseClass}__error`}>{error}</div>}
    </div>
  );
}
