import { useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '../../apis/react-query/user-react-query';
import { useEffect } from 'react';

interface IProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: IProtectedRouteProps) {
  const navigate = useNavigate();
  // 1) Get access token from local storage
  // 2) use AT -> get current user
  const { data, isError } = useGetCurrentUser();

  console.log('has error', isError);

  useEffect(() => {
    if (isError) return navigate('/sign-in');
    if (data && data.data.role !== 'admin') return navigate('/sign-in');
  }, [data, isError]);

  return children;
}
