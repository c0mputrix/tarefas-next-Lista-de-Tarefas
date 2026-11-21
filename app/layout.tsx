import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Lista de Tarefas',
  description: 'Atividade de testes unitários com Next.js 15',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
