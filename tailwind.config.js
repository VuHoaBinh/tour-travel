module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        main: 'var(--color-primary-main)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: {
        light: 'var(--color-secondary-light)',
        main: 'var(--color-secondary-main)',
        dark: 'var(--color-secondary-dark)',
      },
      paper: {
        main: 'var(--color-paper-main)',
        dark: 'var(--color-paper-dark)',
        grey: 'var(--color-paper-grey)',
      },
      neutral: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        disbled: 'var(--color-text-disabled)',
      },
      border: {
        main: 'var(--color-border-main)',
        dark: 'var(--color-border-dark)',
      },
      transparent: 'rgba(0, 0, 0, 0)',
    },
    extend: {
      boxShadow: {
        sm: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        md: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  darkmode: 'class',
  plugins: [],
};
