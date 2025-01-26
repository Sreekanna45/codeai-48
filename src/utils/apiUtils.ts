export const getStoredApiKey = (key: string) => {
  return localStorage.getItem(key);
};

export const setApiKey = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const API_KEYS = {
  OPENAI: 'OPENAI_API_KEY',
  JUDGE0: 'JUDGE0_API_KEY'
} as const;