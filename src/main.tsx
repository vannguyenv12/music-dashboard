import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layouts/root.tsx';
import NotificationProvider, { globalNotify } from './context/notification.tsx';
import './index.css';
import DashboardPage from './pages/dashboard/dashboard-page.tsx';
import SignInPage from './pages/sign-in/sign-in-page.tsx';
import SignUpPage from './pages/sign-up/sign-up-page.tsx';
import ProtectedRoute from './components/auth/protected-route.tsx';
import SongPage from './pages/song/song-page.tsx';
import AlbumPage from './pages/album/album-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/manage-song',
        element: <SongPage />,
      },
      {
        path: '/manage-album',
        element: <AlbumPage />,
      },
      {
        path: '/upload',
        element: <div>Upload Song</div>,
      },
    ],
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up-artist',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in-artist',
    element: <SignInPage />,
  },
]);

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError(error) {
      if (Array.isArray(error.message)) {
        globalNotify.error(error.message.join(', '));
      } else {
        globalNotify.error(error.message);
      }
    },
  }),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NotificationProvider>
  </StrictMode>
);
