import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AramarkCaseStudyPage from './pages/AramarkCaseStudyPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AramarkCaseStudyPage />
  </StrictMode>
);
