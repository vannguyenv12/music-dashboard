import { useMutation, useQuery } from '@tanstack/react-query';
import { albumApi } from '../album-api';

export function useGetAlbums() {
  return useQuery({
    queryKey: ['albums'],
    queryFn: () => albumApi.getAll(),
  });
}

export function useCreateAlbum() {
  return useMutation({
    mutationFn: albumApi.create,
  });
}

export function useAddSongsToAlbum() {
  return useMutation({
    mutationFn: albumApi.addSongs,
  });
}
