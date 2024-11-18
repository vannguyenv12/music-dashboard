import { useQuery } from '@tanstack/react-query';
import { songApi } from '../song-api';

export function useGetSongs() {
  return useQuery({
    queryKey: ['songs'],
    queryFn: () => songApi.getAllSongs(),
  });
}
