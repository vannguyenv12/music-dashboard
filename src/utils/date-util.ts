import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY');
};

export const formatDateForPayload = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
