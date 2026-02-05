import Alpine from 'alpinejs';
import { weatherService } from './weatherService';
import type { WeatherData, Units } from './types';
import { 
  createButton, 
  createInput, 
  createSpinner,
  createSearchBar,
  createStatCard,
  createDayCard,
  createHourlyItem,
  createCurrentWeatherCard,
  createDailyForecast,
  createHourlyForecast,
  getWeatherIcon
} from './components';

export interface WeatherStore {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  units: Units;
  selectedDay: number;
  showUnitsModal: boolean;
  
  init(): void;
  loadDefaultWeather(): Promise<void>;
  searchWeather(): Promise<void>;
  toggleUnits(): void;
  setUnits(units: Units): Promise<void>;
  selectDay(index: number): void;
  getWeatherIcon(weatherCode: number): string;
  getWeatherDescription(weatherCode: number): string;
  getHourlyForecastForDay(): any[];
  formatTemperature(temp: number): string;
  formatWind(speed: number): string;
  formatPrecipitation(amount: number): string;
  
  // Component rendering methods
  renderButton: typeof createButton;
  renderInput: typeof createInput;
  renderSpinner: typeof createSpinner;
  renderSearchBar: typeof createSearchBar;
  renderStatCard: typeof createStatCard;
  renderDayCard: typeof createDayCard;
  renderHourlyItem: typeof createHourlyItem;
  renderCurrentWeatherCard: typeof createCurrentWeatherCard;
  renderDailyForecast: typeof createDailyForecast;
  renderHourlyForecast: typeof createHourlyForecast;
}

export function createWeatherStore(): WeatherStore {
  return {
    weatherData: null,
    loading: false,
    error: null,
    searchQuery: '',
    units: 'metric' as Units,
    selectedDay: 0,
    showUnitsModal: false,

    init() {
      this.loadDefaultWeather();
    },

    async loadDefaultWeather() {
      try {
        this.loading = true;
        this.error = null;
        this.weatherData = await weatherService.getWeatherByCity('Berlin', this.units);
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to load weather data';
        console.error('Error loading default weather:', err);
      } finally {
        this.loading = false;
      }
    },

    async searchWeather() {
      if (!this.searchQuery.trim()) {
        return;
      }

      try {
        this.loading = true;
        this.error = null;
        this.weatherData = await weatherService.getWeatherByCity(this.searchQuery, this.units);
        this.searchQuery = '';
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch weather data';
        console.error('Error fetching weather:', err);
      } finally {
        this.loading = false;
      }
    },

    toggleUnits() {
      this.showUnitsModal = !this.showUnitsModal;
    },

    async setUnits(units: Units) {
      if (this.units === units) {
        this.showUnitsModal = false;
        return;
      }

      this.units = units;
      this.showUnitsModal = false;

      if (this.weatherData) {
        try {
          this.loading = true;
          this.error = null;
          this.weatherData = await weatherService.getWeatherByCity(
            this.weatherData.location, 
            this.units
          );
        } catch (err) {
          this.error = err instanceof Error ? err.message : 'Failed to update units';
          console.error('Error updating units:', err);
        } finally {
          this.loading = false;
        }
      }
    },

    selectDay(index: number) {
      this.selectedDay = index;
    },

    getWeatherIcon(weatherCode: number): string {
      return weatherService.getWeatherIcon(weatherCode, true);
    },

    getWeatherDescription(weatherCode: number): string {
      return weatherService.getWeatherDescription(weatherCode);
    },

    getHourlyForecastForDay() {
      if (!this.weatherData) return [];
      
      const hoursPerDay = 24;
      const startIndex = this.selectedDay * hoursPerDay;
      const endIndex = startIndex + hoursPerDay;
      
      return this.weatherData.hourlyForecast.slice(startIndex, endIndex);
    },

    formatTemperature(temp: number): string {
      const unit = this.units === 'metric' ? '°C' : '°F';
      return `${temp}${unit}`;
    },

    formatWind(speed: number): string {
      const unit = this.units === 'metric' ? 'km/h' : 'mph';
      return `${speed} ${unit}`;
    },

    formatPrecipitation(amount: number): string {
      const unit = this.units === 'metric' ? 'mm' : 'in';
      return `${amount} ${unit}`;
    },

    // Component rendering methods
    renderButton: createButton,
    renderInput: createInput,
    renderSpinner: createSpinner,
    renderSearchBar: createSearchBar,
    renderStatCard: createStatCard,
    renderDayCard: createDayCard,
    renderHourlyItem: createHourlyItem,
    renderCurrentWeatherCard: createCurrentWeatherCard,
    renderDailyForecast: createDailyForecast,
    renderHourlyForecast: createHourlyForecast
  };
}

export function initWeatherApp() {
  Alpine.data('weatherApp', createWeatherStore);
}
