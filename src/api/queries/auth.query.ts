import type { loginRequest } from '@/pages/auth/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { login as loginService } from '../services/auth.service';
import { useAuthStore } from '@/stores/auth-store';

export function useLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (data: loginRequest) => loginService(data),
    onSuccess: (data) => {
      const { access_token, user } = data;
      login(access_token, user);
    }
  });
}
