export const createBackendUrl = (url: string) => {
  return `${import.meta.env.VITE_BACKEND_URL}${url}`;
};

export const ITEMS_PER_PAGE = 5;
