import { useGetCurrentUser } from '../../apis/react-query/user-react-query';

export default function ProtectedRoute() {
  // 1) Get access token from local storage
  const accessToken = localStorage.getItem('accessToken') || '';
  // 2) use AT -> get current user
  const { data } = useGetCurrentUser(accessToken);

  // 3) Based on step 2) -> check role
  //   3.1) If user is not an admin -> navigate to sign in page
}
