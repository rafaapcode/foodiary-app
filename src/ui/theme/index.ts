const colors = {
  white: '#fff',

  lime: {
    400: '#e8fb86',
    500: '#bef264',
    600: '#a2e635',
    700: '#64a30c',
    800: '#1a2e05',
    900: '#022c22',
  },

  support: {
    ambar: '#ffff00',
    green: '#10b981',
    orange: '#f4a462',
    red: '#ef4444',
    teal: '#2a9d90',
    tomato: '#e76e50',
    yellow: '#e8c468',
  },

  gray: {
    100: '#fafafa',
    200: '#f4f4f5',
    300: '#f3f4f6',
    400: '#e4e4e7',
    500: '#d9d9d9',
    600: '#a1a1aa',
    700: '#71717a',
  },

  black: {
    600: '#1e293b',
    700: '#18181b',
    800: '#09090b',
    900: '#000000',
  },
} as const;

export const theme = {
  colors,
} as const;
