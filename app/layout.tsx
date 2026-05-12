import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'ABDA | Agribusiness Development Association',
  description: 'ABDA of Faculty of Agriculture, University of Ruhuna - innovation and entrepreneurship hub.',
  openGraph: { title: 'ABDA x NOVABIZ', description: 'Empowering agricultural innovation and student entrepreneurship.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
