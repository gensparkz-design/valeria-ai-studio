import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valeria AI Studio | AI Automation',
  description: 'AI agents, chatbots and business automation solutions for modern teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
