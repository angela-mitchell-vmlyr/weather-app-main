import { Skeleton } from '../../molecules/Skeleton/Skeleton';

export function WeatherSkeleton() {
  return (
    <div className="weather-grid">
      <div className="weather-grid__main">
        <div className="skeleton-weather-card">
          <div className="skeleton-weather-card__dots">
            <div className="skeleton-weather-card__dot" />
            <div className="skeleton-weather-card__dot" />
            <div className="skeleton-weather-card__dot" />
          </div>
          <div className="skeleton-weather-card__text">Loading...</div>
        </div>

        <div className="stats-grid">
          {['Feels Like', 'Humidity', 'Wind', 'Precipitation'].map((label) => (
            <div key={label} className="stat-card">
              <div className="stat-card__label">{label}</div>
              <div className="stat-card__value">&mdash;</div>
            </div>
          ))}
        </div>

        <div className="daily-forecast">
          <h3 className="daily-forecast__title">Daily forecast</h3>
          <div className="daily-forecast__grid">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} height="8rem" borderRadius="var(--radius-lg)" />
            ))}
          </div>
        </div>
      </div>

      <div className="weather-grid__sidebar">
        <div className="hourly-forecast">
          <div className="hourly-forecast__header">
            <h3 className="hourly-forecast__title">Hourly forecast</h3>
            <Skeleton width="3rem" height="1.5rem" borderRadius="var(--radius-md)" />
          </div>
          <div className="hourly-forecast__list">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ padding: 'var(--spacing-sm) 0' }}>
                <Skeleton height="1.5rem" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
