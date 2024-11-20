import { useMutation, usePrefetchQuery, useQuery } from '@tanstack/react-query';
import { songApi } from '../song-api';

export function useGetSongs(page: number) {
  return useQuery({
    queryKey: ['songs', page],
    queryFn: () => songApi.getAllSongs(page),
  });
}

export function usePrefetchSongs(page: number) {
  return usePrefetchQuery({
    queryKey: ['songs', page + 1],
    queryFn: () => songApi.getAllSongs(page + 1),
  });
}

export function useCreateSong() {
  return useMutation({
    mutationFn: songApi.create,
  });
}

export function useUpdateSong() {
  return useMutation({
    mutationFn: songApi.update,
  });
}

export function useDeleteSong() {
  return useMutation({
    mutationFn: songApi.delete,
  });
}

export function useUploadSongImage() {
  return useMutation({
    mutationFn: songApi.uploadImage,
  });
}

export function useUploadSongAudio() {
  return useMutation({
    mutationFn: songApi.uploadAudio,
  });
}
