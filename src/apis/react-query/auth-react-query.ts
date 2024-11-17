import { useMutation } from '@tanstack/react-query';
import { authApi } from '../auth-api';
import { useNotificationContext } from '../../context/notification';

export function useSignUp() {
  // Context
  const notification = useNotificationContext();

  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess(data) {
      notification.success('Sign up success');
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
    },
  });
}
