import { useMutation } from '@tanstack/react-query';
import { authApi } from '../auth-api';

export function useSignUp() {
  return useMutation({
    mutationFn: authApi.signUp,
  });
}
