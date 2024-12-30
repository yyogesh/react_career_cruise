export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  JOBS: '/jobs',
  APPLICATIONS: '/applications',
};


export const JOB_TYPES = ['full-time', 'part-time', 'contract'] as const;
export type JobType = typeof JOB_TYPES[number];

export const CURRENCIES = ['USD', 'EUR', 'GBP'] as const;
export type Currency = typeof CURRENCIES[number]; 