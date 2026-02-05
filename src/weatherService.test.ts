import { describe, it, expect, beforeEach, vi } from 'vitest';
import { WeatherService } from './weatherService';
import type { WeatherResponse, GeocodingResponse } from './types';

const mockGeocodingResponse: GeocodingResponse = {
  results: [
    {
      id: 1,
      name: 'Berlin',
      latitude: 52.52,
      longitude: 13.41,
      country: 'Germany',
      admin1: 'Berlin'
    }
  ]
};

const mockWeatherResponse: WeatherResponse = {
  latitude: 52.52,
  longitude: 13.41,
  timezone: 'Europe/Berlin',
  current_weather: {
    temperature: 20,
    windspeed: 14,
    winddirection: 180,
    weathercode: 0,
    is_day: 1,
    time: '2025-08-05T15:00'
  },
  hourly: {
    time: [
      '2025-08-05T00:00', '2025-08-05T01:00', '2025-08-05T02:00', '2025-08-05T03:00',
      '2025-08-05T04:00', '2025-08-05T05:00', '2025-08-05T06:00', '2025-08-05T07:00',
      '2025-08-05T08:00', '2025-08-05T09:00', '2025-08-05T10:00', '2025-08-05T11:00',
      '2025-08-05T12:00', '2025-08-05T13:00', '2025-08-05T14:00', '2025-08-05T15:00',
      '2025-08-05T16:00', '2025-08-05T17:00', '2025-08-05T18:00', '2025-08-05T19:00',
      '2025-08-05T20:00', '2025-08-05T21:00', '2025-08-05T22:00', '2025-08-05T23:00'
    ],
    temperature_2m: [
      18, 17, 16, 15, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 24, 23, 22, 21, 20, 19, 18, 17, 17, 16
    ],
    weathercode: [
      0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1,
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 2
    ],
    precipitation: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    relativehumidity_2m: [
      65, 68, 70, 72, 71, 69, 67, 65, 63, 60, 58, 56,
      54, 52, 51, 52, 54, 56, 58, 60, 62, 64, 65, 66
    ]
  },
  daily: {
    time: ['2025-08-05', '2025-08-06', '2025-08-07', '2025-08-08', '2025-08-09', '2025-08-10', '2025-08-11'],
    weathercode: [0, 2, 3, 61, 80, 1, 0],
    temperature_2m_max: [24, 25, 23, 21, 22, 26, 27],
    temperature_2m_min: [15, 16, 14, 13, 15, 17, 18],
    precipitation_sum: [0, 0, 0, 5.2, 2.1, 0, 0]
  },
  hourly_units: {
    temperature_2m: '°C',
    precipitation: 'mm',
    relativehumidity_2m: '%'
  },
  daily_units: {
    temperature_2m_max: '°C',
    temperature_2m_min: '°C',
    precipitation_sum: 'mm'
  }
};

describe('WeatherService', () => {
  let weatherService: WeatherService;

  beforeEach(() => {
    weatherService = new WeatherService();
    global.fetch = vi.fn();
  });

  describe('searchLocation', () => {
    it('should search for a location and return geocoding results', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockGeocodingResponse
      });

      const result = await weatherService.searchLocation('Berlin');

      expect(result).toEqual(mockGeocodingResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('geocoding-api.open-meteo.com/v1/search')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('name=Berlin')
      );
    });

    it('should throw error when location search fails', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false
      });

      await expect(weatherService.searchLocation('InvalidCity')).rejects.toThrow(
        'Failed to search location'
      );
    });
  });

  describe('getWeatherByCoordinates', () => {
    it('should fetch weather data for given coordinates with metric units', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockWeatherResponse
      });

      const result = await weatherService.getWeatherByCoordinates(52.52, 13.41, 'metric');

      expect(result).toEqual(mockWeatherResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('api.open-meteo.com/v1/forecast')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('latitude=52.52')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('longitude=13.41')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('temperature_unit=celsius')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('windspeed_unit=kmh')
      );
    });

    it('should fetch weather data with imperial units', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockWeatherResponse
      });

      await weatherService.getWeatherByCoordinates(52.52, 13.41, 'imperial');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('temperature_unit=fahrenheit')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('windspeed_unit=mph')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('precipitation_unit=inch')
      );
    });

    it('should throw error when weather fetch fails', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false
      });

      await expect(
        weatherService.getWeatherByCoordinates(52.52, 13.41)
      ).rejects.toThrow('Failed to fetch weather data');
    });
  });

  describe('getWeatherByCity', () => {
    it('should fetch weather data for a city name', async () => {
      (global.fetch as any)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockGeocodingResponse
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockWeatherResponse
        });

      const result = await weatherService.getWeatherByCity('Berlin', 'metric');

      expect(result.location).toBe('Berlin');
      expect(result.country).toBe('Germany');
      expect(result.temperature).toBe(20);
      expect(result.wind).toBe(14);
      expect(result.dailyForecast).toHaveLength(7);
      expect(result.hourlyForecast.length).toBeGreaterThan(0);
    });

    it('should throw error when location is not found', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [] })
      });

      await expect(weatherService.getWeatherByCity('NonExistentCity')).rejects.toThrow(
        'Location not found'
      );
    });
  });

  describe('getWeatherIcon', () => {
    it('should return correct icon for clear sky during day', () => {
      const icon = weatherService.getWeatherIcon(0, true);
      expect(icon).toBe('☀️');
    });

    it('should return correct icon for clear sky at night', () => {
      const icon = weatherService.getWeatherIcon(0, false);
      expect(icon).toBe('🌙');
    });

    it('should return correct icon for rain', () => {
      const icon = weatherService.getWeatherIcon(61, true);
      expect(icon).toBe('🌧️');
    });

    it('should return correct icon for thunderstorm', () => {
      const icon = weatherService.getWeatherIcon(95, true);
      expect(icon).toBe('⛈️');
    });

    it('should return default icon for unknown weather code', () => {
      const icon = weatherService.getWeatherIcon(999, true);
      expect(icon).toBe('☁️');
    });
  });

  describe('getWeatherDescription', () => {
    it('should return correct description for clear sky', () => {
      const description = weatherService.getWeatherDescription(0);
      expect(description).toBe('Clear sky');
    });

    it('should return correct description for rain', () => {
      const description = weatherService.getWeatherDescription(61);
      expect(description).toBe('Slight rain');
    });

    it('should return correct description for thunderstorm', () => {
      const description = weatherService.getWeatherDescription(95);
      expect(description).toBe('Thunderstorm');
    });

    it('should return unknown for invalid weather code', () => {
      const description = weatherService.getWeatherDescription(999);
      expect(description).toBe('Unknown');
    });
  });

  describe('data transformation', () => {
    it('should correctly transform weather response to WeatherData', async () => {
      (global.fetch as any)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockGeocodingResponse
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockWeatherResponse
        });

      const result = await weatherService.getWeatherByCity('Berlin');

      expect(result).toMatchObject({
        location: 'Berlin',
        country: 'Germany',
        temperature: 20,
        wind: 14,
        weatherCode: 0
      });

      expect(result.dailyForecast).toHaveLength(7);
      expect(result.dailyForecast[0]).toMatchObject({
        day: expect.any(String),
        weatherCode: 0,
        maxTemp: 24,
        minTemp: 15,
        precipitation: 0
      });

      expect(result.hourlyForecast.length).toBeGreaterThan(0);
      expect(result.hourlyForecast[0]).toMatchObject({
        time: expect.any(String),
        temperature: expect.any(Number),
        weatherCode: expect.any(Number),
        precipitation: expect.any(Number)
      });
    });
  });
});
