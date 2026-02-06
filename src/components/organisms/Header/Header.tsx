import { Dropdown } from '../../molecules/Dropdown/Dropdown';
import type { Units } from '../../../types';

export interface HeaderProps {
  units: Units;
  onSetUnits?: (units: Units) => void;
}

export function Header({ units, onSetUnits }: HeaderProps) {
  const baseClass = 'header';

  return (
    <header className={baseClass}>
      <div className={`${baseClass}__brand`}>
        <img src="./assets/images/logo.svg" alt="Weather Now" className={`${baseClass}__logo`} />
      </div>
      <div className={`${baseClass}__actions`}>
        <Dropdown
          label="Units"
          icon="⚙️"
          variant="single"
          options={[
            { label: 'Metric (°C, km/h)', value: 'metric', selected: units === 'metric' },
            { label: 'Imperial (°F, mph)', value: 'imperial', selected: units === 'imperial' },
          ]}
          onSelect={(value: string) => onSetUnits?.(value as Units)}
        />
      </div>
    </header>
  );
}
