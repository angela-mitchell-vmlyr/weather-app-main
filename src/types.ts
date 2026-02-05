export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
  precipitation: number[];
  relativehumidity_2m: number[];
}

export interface DailyWeather {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: CurrentWeather;
  hourly?: HourlyWeather;
  daily?: DailyWeather;
  hourly_units?: {
    temperature_2m: string;
    precipitation: string;
    relativehumidity_2m: string;
  };
  daily_units?: {
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
  };
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export interface GeocodingResponse {
  results?: GeocodingResult[];
}

export interface WeatherData {
  location: string;
  country: string;
  date: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
  weatherCode: number;
  hourlyForecast: HourlyForecastItem[];
  dailyForecast: DailyForecastItem[];
}

export interface HourlyForecastItem {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitation: number;
}

export interface DailyForecastItem {
  day: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  precipitation: number;
}

export type Units = 'metric' | 'imperial';
