export const siteConfig = {
  // Site metadata
  name: 'Распродажа детских вещей',
  description: 'Покупайте качественные детские товары',
  url: 'https://dimasmagadan.github.io/sale',
  
  // Contact information
  telegram: {
    username: 'dimasmagadan',
    link: 'https://t.me/dimasmagadan'
  },
  
  // Theme configuration
  theme: {
    colors: {
      primary: '#3b82f6',      // blue-500
      primaryHover: '#2563eb', // blue-600
      secondary: '#64748b',    // slate-500
      accent: '#f59e0b',       // amber-500
      background: '#ffffff',
      text: '#1e293b',         // slate-800
      textLight: '#64748b',    // slate-500
    },
    fonts: {
      sans: 'system-ui, -apple-system, sans-serif',
      heading: 'system-ui, -apple-system, sans-serif',
    },
    spacing: {
      containerMaxWidth: '1280px',
      sectionPadding: '2rem',
    }
  },
  
  // GitHub Pages configuration
  basePath: '/sale',
  
  // Image CDN helper
  getImageUrl: (path: string, width?: number) => {
    // CDN disabled: return local/absolute path with basePath if needed
    const fullUrl = path.startsWith('http') ? path : `${siteConfig.basePath}${path}`;
    return fullUrl;
  },
};
