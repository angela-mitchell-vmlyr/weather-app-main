import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Import SCSS design system (Tier 1 + 2)
import './styles/semantic.scss';

// Import component styles
import './components/atoms/index.scss';
import './components/molecules/index.scss';
import './components/organisms/index.scss';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
