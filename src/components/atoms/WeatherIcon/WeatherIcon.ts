export interface WeatherIconProps {
  weatherCode: number;
  isDay?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export function getWeatherIcon(weatherCode: number, isDay: boolean = true): string {
  const iconMap: { [key: number]: string } = {
    0: isDay ? '☀️' : '🌙',
    1: isDay ? '🌤️' : '🌙',
    2: '⛅',
    3: '☁️',
    45: '🌫️',
    48: '🌫️',
    51: '🌦️',
    53: '🌦️',
    55: '🌦️',
    61: '🌧️',
    63: '🌧️',
    65: '🌧️',
    71: '🌨️',
    73: '🌨️',
    75: '🌨️',
    77: '🌨️',
    80: '🌦️',
    81: '🌦️',
    82: '🌧️',
    85: '🌨️',
    86: '🌨️',
    95: '⛈️',
    96: '⛈️',
    99: '⛈️'
  };
  
  return iconMap[weatherCode] || '☁️';
}

export function createWeatherIcon(props: WeatherIconProps): string {
  const { weatherCode, isDay = true, size = 'medium' } = props;
  const icon = getWeatherIcon(weatherCode, isDay);
  
  const baseClass = 'weather-icon';
  const sizeClass = `${baseClass}--${size}`;
  
  return `
    <div class="${baseClass} ${sizeClass}">
      ${icon}
    </div>
  `;
}
