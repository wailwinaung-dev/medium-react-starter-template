import type {
  loginRequest,
  loginResponse
} from '@/pages/auth/types/auth.types';
import axiosInstance from '../axios/axios';
export function login(data: loginRequest): Promise<loginResponse> {
  return Promise.resolve({
    access_token: 'token123',
    user: {
      id: 'user123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user'
    }
  });
}
