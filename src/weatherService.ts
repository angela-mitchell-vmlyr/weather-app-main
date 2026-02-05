import type { 
  WeatherResponse, 
  GeocodingResponse, 
  WeatherData,
  HourlyForecastItem,
  DailyForecastItem,
  Units 
} from './types';

const WEATHER_API_BASE = 'https://api.open-meteo.com/v1';
const GEOCODING_API_BASE = 'https://geocoding-api.open-meteo.com/v1';

export class WeatherService {
  
  async searchLocation(query: string): Promise<GeocodingResponse> {
    const response = await fetch(
      `${GEOCODING_API_BASE}/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`
    );
    
    if (!response.ok) {
      throw new Error('Failed to search location');
    }
    
    return response.json();
  }

  async getWeatherByCoordinates(
    latitude: number, 
    longitude: number,
    units: Units = 'metric'
  ): Promise<WeatherResponse> {
    const temperatureUnit = units === 'metric' ? 'celsius' : 'fahrenheit';
    const windspeedUnit = units === 'metric' ? 'kmh' : 'mph';
    const precipitationUnit = units === 'metric' ? 'mm' : 'inch';
    
    const params = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current_weather: 'true',
      hourly: 'temperature_2m,weathercode,precipitation,relativehumidity_2m',
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum',
      temperature_unit: temperatureUnit,
      windspeed_unit: windspeedUnit,
      precipitation_unit: precipitationUnit,
      timezone: 'auto',
      forecast_days: '7'
    });

    const response = await fetch(`${WEATHER_API_BASE}/forecast?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    return response.json();
  }

  async getWeatherByCity(city: string, units: Units = 'metric'): Promise<WeatherData> {
    const geocodingResult = await this.searchLocation(city);
    
    if (!geocodingResult.results || geocodingResult.results.length === 0) {
      throw new Error('Location not found');
    }
    
    const location = geocodingResult.results[0];
    const weatherData = await this.getWeatherByCoordinates(
      location.latitude, 
      location.longitude,
      units
    );
    
    return this.transformWeatherData(weatherData, location.name, location.country);
  }

  private transformWeatherData(
    data: WeatherResponse, 
    cityName: string, 
    country: string
  ): WeatherData {
    const currentWeather = data.current_weather;
    const hourly = data.hourly;
    const daily = data.daily;
    
    const currentDate = new Date(currentWeather.time);
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const humidity = hourly?.relativehumidity_2m?.[0] || 0;
    
    const hourlyForecast: HourlyForecastItem[] = [];
    if (hourly) {
      const currentHour = currentDate.getHours();
      for (let i = 0; i < 24; i++) {
        const hourIndex = currentHour + i;
        if (hourIndex < hourly.time.length) {
          const time = new Date(hourly.time[hourIndex]);
          hourlyForecast.push({
            time: time.toLocaleTimeString('en-US', { 
              hour: 'numeric',
              hour12: true 
            }),
            temperature: Math.round(hourly.temperature_2m[hourIndex]),
            weatherCode: hourly.weathercode[hourIndex],
            precipitation: hourly.precipitation[hourIndex]
          });
        }
      }
    }

    const dailyForecast: DailyForecastItem[] = [];
    if (daily) {
      for (let i = 0; i < daily.time.length; i++) {
        const date = new Date(daily.time[i]);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        dailyForecast.push({
          day: dayName,
          weatherCode: daily.weathercode[i],
          maxTemp: Math.round(daily.temperature_2m_max[i]),
          minTemp: Math.round(daily.temperature_2m_min[i]),
          precipitation: daily.precipitation_sum[i]
        });
      }
    }

    return {
      location: cityName,
      country: country,
      date: formattedDate,
      temperature: Math.round(currentWeather.temperature),
      feelsLike: Math.round(currentWeather.temperature),
      humidity: Math.round(humidity),
      wind: Math.round(currentWeather.windspeed),
      precipitation: 0,
      weatherCode: currentWeather.weathercode,
      hourlyForecast,
      dailyForecast
    };
  }

  getWeatherIcon(weatherCode: number, isDay: boolean = true): string {
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

  getWeatherDescription(weatherCode: number): string {
    const descriptionMap: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    
    return descriptionMap[weatherCode] || 'Unknown';
  }
}

export const weatherService = new WeatherService();
