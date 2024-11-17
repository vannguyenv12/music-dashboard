import { useQuery } from '@tanstack/react-query';
import { userApi } from '../user-api';

export function useGetCurrentUser(token: string) {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => userApi.getCurrentUser(token),
  });
}
