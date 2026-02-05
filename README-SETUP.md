# Weather App - Alpine.js + TypeScript

An Alpine.js weather application that fetches data from the Open-Meteo API and displays current weather, hourly forecasts, and daily forecasts.

## Features

- 🌤️ Real-time weather data from Open-Meteo API
- 🔍 City search with geocoding
- 📊 7-day daily forecast
- ⏰ 24-hour hourly forecast
- 🌡️ Metric/Imperial unit switching
- 📱 Responsive design (mobile & desktop)
- ⚡ Built with Alpine.js and TypeScript
- ✅ Unit tests with Vitest

## API Information

### Weather Data
The app uses the Open-Meteo API to fetch weather data:
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
```

### City/Country Names
City and country names are retrieved from the Open-Meteo Geocoding API:
```
https://geocoding-api.open-meteo.com/v1/search?name={cityName}
```

The geocoding API returns:
- `name`: City name
- `country`: Country name
- `latitude` & `longitude`: Coordinates for weather lookup

**Note**: The weather API's `timezone` property (e.g., "Europe/Berlin") only provides timezone information, not the city/country name. We use the separate geocoding API to get location names.

## Installation

```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Testing

Run unit tests:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── types.ts              # TypeScript type definitions
├── weatherService.ts     # API service for fetching weather data
├── weatherStore.ts       # Alpine.js store/component logic
├── main.ts              # Application entry point
├── alpine.d.ts          # Alpine.js type declarations
└── weatherService.test.ts # Unit tests with mock data
```

## How It Works

1. **Initialization**: The app loads Berlin weather by default
2. **Search**: Users can search for any city
3. **Geocoding**: City name → coordinates via Geocoding API
4. **Weather Fetch**: Coordinates → weather data via Weather API
5. **Display**: Data is transformed and displayed with Alpine.js reactivity
6. **Units**: Users can toggle between metric (°C, km/h, mm) and imperial (°F, mph, in)

## Technologies

- **Alpine.js**: Lightweight reactive framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Vitest**: Unit testing framework
- **Tailwind CSS**: Utility-first CSS (via CDN)
- **Open-Meteo API**: Free weather and geocoding API (no API key required)
