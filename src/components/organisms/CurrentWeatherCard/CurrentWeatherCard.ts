import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface CurrentWeatherCardProps {
  location: string;
  country: string;
  date: string;
  temperature: string;
  weatherCode: number;
}

export function createCurrentWeatherCard(props: CurrentWeatherCardProps): string {
  const { location, country, date, temperature, weatherCode } = props;
  const icon = getWeatherIcon(weatherCode, true);
  
  const baseClass = 'current-weather-card';
  
  return `
    <div class="${baseClass}">
      <div class="${baseClass}__decoration ${baseClass}__decoration--sun">☀️</div>
      <div class="${baseClass}__decoration ${baseClass}__decoration--cloud">☁️</div>
      
      <div class="${baseClass}__content">
        <h3 class="${baseClass}__location">${location}, ${country}</h3>
        <p class="${baseClass}__date">${date}</p>
        
        <div class="${baseClass}__weather">
          <div class="${baseClass}__icon">${icon}</div>
          <div class="${baseClass}__temperature">${temperature}</div>
        </div>
      </div>
    </div>
  `;
}
