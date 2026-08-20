// ML AutoRespostas Core
// Módulo central com tipos, utilitários e constantes compartilhadas

export const VERSION = '1.0.0';

export interface AppConfig {
  environment: string;
  version: string;
}

export function getAppConfig(): AppConfig {
  return {
    environment: process.env.NODE_ENV ?? 'development',
    version: VERSION,
  };
}

// Smoke test export
export function healthCheck(): boolean {
  return true;
}
