export interface HeaderProps {
  onUnitsClick?: () => void;
}

export function createHeader(props: HeaderProps): string {
  const { onUnitsClick } = props;
  
  const baseClass = 'header';
  
  return `
    <header class="${baseClass}">
      <div class="${baseClass}__brand">
        <img src="./assets/images/logo.svg" alt="Weather Now" class="${baseClass}__logo">
      </div>
      <div class="${baseClass}__actions" id="header-actions">
        <!-- Dropdown will be inserted here -->
      </div>
    </header>
  `;
}

