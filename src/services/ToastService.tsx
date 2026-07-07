import { createContext, useContext, useRef } from 'react';
import type { ReactNode } from 'react';
import { Toast } from 'primereact/toast';

interface ToastContextType {
  success: (msg: string) => void;
  info: (msg: string) => void;
  warn: (msg: string) => void;
  error: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const toastRef = useRef<Toast>(null);

  const show = (severity: 'success' | 'info' | 'warn' | 'error', msg: string) => {
    toastRef.current?.show({ severity, summary: severity.charAt(0).toUpperCase() + severity.slice(1), detail: msg });
  };

  const value: ToastContextType = {
    success: (msg) => show('success', msg),
    info: (msg) => show('info', msg),
    warn: (msg) => show('warn', msg),
    error: (msg) => show('error', msg),
  };

  return (
    <ToastContext.Provider value={value}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return ctx;
}
