import { useMutation } from '@tanstack/react-query';
import { authApi } from '../auth-api';
import { useNotificationContext } from '../../context/notification';
import { useNavigate } from 'react-router-dom';

export function useSignUp() {
  // Context
  const notification = useNotificationContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess(data) {
      notification.success('Sign up success');
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    },
  });
}

export function useSignIn() {
  // Context
  const notification = useNotificationContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess(data) {
      notification.success('Sign in success');
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    },
  });
}

export function useSignUpArtist() {
  // Context
  const notification = useNotificationContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signUpArtist,
    onSuccess(data) {
      notification.success('Sign up success');
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    },
  });
}

export function useSignInArtist() {
  // Context
  const notification = useNotificationContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signInArtist,
    onSuccess(data) {
      notification.success('Sign in success');
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    },
  });
}
