import { useQuery } from '@tanstack/react-query';
import { albumApi } from '../album-api';

export function useGetAlbums() {
  return useQuery({
    queryKey: ['albums'],
    queryFn: () => albumApi.getAll(),
  });
}
