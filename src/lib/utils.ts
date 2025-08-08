import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { StateStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ENCRYPT_KEY = import.meta.env.VITE_ENCRYPT_KEY;
export const encryptStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const raw = localStorage.getItem(name);
    if (!raw) return null;
    return decrypt(raw, ENCRYPT_KEY);
  },
  setItem: (name: string, value: string): void => {
    const raw = encrypt(value, ENCRYPT_KEY);
    return localStorage.setItem(name, raw);
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  }
};

export function encrypt(data: string, secret: string): string {
  return CryptoJS.AES.encrypt(data, secret).toString();
}

export function decrypt(data: string, secret: string): string {
  const bytes = CryptoJS.AES.decrypt(data, secret);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function reableDate(date: string): string {
  return format(new Date(date), 'dd/MM/yyyy HH:mm:ss');
}
