import { encryptStorage } from '@/lib/utils';
import type { User } from '@/pages/auth/types/auth.types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  accessToken: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      login: (token, user) => set({ accessToken: token, user }),
      logout: () => set({ accessToken: null, user: null })
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => encryptStorage)
    }
  )
);
