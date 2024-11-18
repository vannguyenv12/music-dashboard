export const createBackendUrl = (url: string) => {
  return `${import.meta.env.VITE_BACKEND_URL}${url}`;
};
