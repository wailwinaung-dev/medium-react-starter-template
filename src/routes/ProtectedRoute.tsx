import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { useNavigate } from 'react-router';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/auth/login', { replace: true });
    }
  }, [accessToken, navigate]);

  return <>{accessToken ? children : null}</>;
}
