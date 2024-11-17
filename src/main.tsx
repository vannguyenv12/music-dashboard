import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/dashboard/dashboard-page.tsx';
import './index.css';
import RootLayout from './components/layouts/root.tsx';
import SignUpPage from './pages/sign-up/sign-up-page.tsx';
import SignInPage from './pages/sign-in/sign-in-page.tsx';
import NotificationProvider from './context/notification.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/manage-song',
        element: <div>Manage Song</div>,
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
]);

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
