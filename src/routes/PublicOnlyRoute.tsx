import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { Outlet, useNavigate } from 'react-router';

export function PublicOnlyRoute() {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/'); // Redirect to home or dashboard
    }
  }, [accessToken, navigate]);

  return <>{!accessToken ? <Outlet /> : null}</>;
}
