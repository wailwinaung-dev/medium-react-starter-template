import { MainLayout, RootLayout } from '../components/layouts';
import { createBrowserRouter } from 'react-router';
import Dashboard from '../pages/dashboard/DashboardPage';
import TransactionPage from '@/pages/transaction/TransactionPage';
import LoginPage from '@/pages/auth/LoginPage';
import InternalServerError from '@/components/pages/server-error';
import NotFound from '@/components/pages/page-not-found';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicOnlyRoute } from './PublicOnlyRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <InternalServerError />,

    children: [
      {
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),

        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'transactions',
            element: <TransactionPage />
          }
        ]
      },
      {
        path: 'auth',
        element: <PublicOnlyRoute />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
