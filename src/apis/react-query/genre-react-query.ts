import { useQuery } from '@tanstack/react-query';
import { genreApi } from '../genre-api';

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => genreApi.getAll(),
  });
}
