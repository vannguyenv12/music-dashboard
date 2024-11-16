import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/dashboard/dashboard-page.tsx';
import './index.css';
import RootLayout from './components/layouts/root.tsx';

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
        path: '/manage-music',
        element: <div>Manage Music</div>,
      },
    ],
  },

  {
    path: '/sign-in',
    element: <div>Sign In Page</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
