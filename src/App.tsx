import { useState, useEffect, useCallback, useRef } from 'react';
import { weatherService } from './weatherService';
import type { WeatherData, Units } from './types';
import { SearchBar, StatCard } from './components/molecules';
import {
  Header,
  CurrentWeatherCard,
  DailyForecast,
  HourlyForecast,
  WeatherSkeleton,
  ErrorState,
} from './components/organisms';

type ErrorType = 'not-found' | 'api-error' | null;

export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorType, setErrorType] = useState<ErrorType>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [units, setUnits] = useState<Units>('metric');
  const [selectedDay, setSelectedDay] = useState(0);
  const lastCity = useRef('Berlin');

  const formatTemperature = useCallback(
    (temp: number): string => {
      const unit = units === 'metric' ? '°C' : '°F';
      return `${temp}${unit}`;
    },
    [units]
  );

  const formatWind = useCallback(
    (speed: number): string => {
      const unit = units === 'metric' ? 'km/h' : 'mph';
      return `${speed} ${unit}`;
    },
    [units]
  );

  const formatPrecipitation = useCallback(
    (amount: number): string => {
      const unit = units === 'metric' ? 'mm' : 'in';
      return `${amount} ${unit}`;
    },
    [units]
  );

  const loadWeather = useCallback(
    async (city: string) => {
      try {
        setLoading(true);
        setErrorType(null);
        lastCity.current = city;
        const data = await weatherService.getWeatherByCity(city, units);
        setWeatherData(data);
        setSelectedDay(0);
      } catch (err) {
        const message = err instanceof Error ? err.message : '';
        if (message === 'Location not found') {
          setErrorType('not-found');
        } else {
          setErrorType('api-error');
          setWeatherData(null);
        }
      } finally {
        setLoading(false);
      }
    },
    [units]
  );

  useEffect(() => {
    loadWeather('Berlin');
  }, [loadWeather]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    loadWeather(searchQuery);
    setSearchQuery('');
  };

  const handleRetry = () => {
    loadWeather(lastCity.current);
  };

  const handleSetUnits = async (newUnits: Units) => {
    if (newUnits === units) return;
    setUnits(newUnits);

    if (weatherData) {
      try {
        setLoading(true);
        setErrorType(null);
        const data = await weatherService.getWeatherByCity(weatherData.location, newUnits);
        setWeatherData(data);
      } catch {
        setErrorType('api-error');
      } finally {
        setLoading(false);
      }
    }
  };

  const getHourlyForecastForDay = () => {
    if (!weatherData) return [];
    const hoursPerDay = 24;
    const startIndex = selectedDay * hoursPerDay;
    const endIndex = startIndex + hoursPerDay;
    return weatherData.hourlyForecast.slice(startIndex, endIndex);
  };

  const showSearchInProgress = loading && weatherData !== null;
  const showSkeleton = loading && weatherData === null && errorType === null;
  const showError = !loading && errorType === 'api-error' && weatherData === null;
  const showNoResults = !loading && errorType === 'not-found';
  const showWeatherData = !loading && weatherData !== null && errorType !== 'not-found';

  return (
    <div className="container">
      <Header units={units} onSetUnits={handleSetUnits} />

      <main>
        <h2 className="main-title">How's the sky looking today?</h2>

        <div className="search-section">
          <SearchBar
            value={searchQuery}
            loading={loading}
            error={showNoResults ? 'No search result found!' : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
          />
          {showSearchInProgress && (
            <div className="search-section__status">
              <span className="search-section__status-icon">✦</span>
              Search in progress
            </div>
          )}
        </div>

        {showError && (
          <ErrorState onRetry={handleRetry} />
        )}

        {showSkeleton && <WeatherSkeleton />}

        {(showWeatherData || showSearchInProgress) && weatherData && (
          <div className="weather-grid">
            <div className="weather-grid__main">
              <CurrentWeatherCard
                location={weatherData.location}
                country={weatherData.country}
                date={weatherData.date}
                temperature={formatTemperature(weatherData.temperature)}
                weatherCode={weatherData.weatherCode}
              />

              <div className="stats-grid">
                <StatCard
                  label="Feels Like"
                  value={formatTemperature(weatherData.feelsLike)}
                  variant="highlighted"
                />
                <StatCard
                  label="Humidity"
                  value={`${weatherData.humidity}%`}
                />
                <StatCard
                  label="Wind"
                  value={formatWind(weatherData.wind)}
                />
                <StatCard
                  label="Precipitation"
                  value={formatPrecipitation(weatherData.precipitation)}
                />
              </div>

              <DailyForecast
                days={weatherData.dailyForecast.map((day) => ({
                  day: day.day,
                  weatherCode: day.weatherCode,
                  maxTemp: formatTemperature(day.maxTemp),
                  minTemp: formatTemperature(day.minTemp),
                }))}
                selectedIndex={selectedDay}
                onSelectDay={setSelectedDay}
              />
            </div>

            <div className="weather-grid__sidebar">
              <HourlyForecast
                hours={getHourlyForecastForDay().map((hour) => ({
                  time: hour.time,
                  weatherCode: hour.weatherCode,
                  temperature: formatTemperature(hour.temperature),
                }))}
                selectedDay={weatherData.dailyForecast[selectedDay]?.day || ''}
              />
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Angela Mitchell</a>.
        </div>
      </footer>
    </div>
  );
}
