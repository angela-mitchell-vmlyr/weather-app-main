import Alpine from 'alpinejs';
import { initWeatherApp } from './weatherStore';

initWeatherApp();

(window as any).Alpine = Alpine;

Alpine.start();
