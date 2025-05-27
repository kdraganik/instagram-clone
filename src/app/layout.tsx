import '../styles/globals.css';
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={dmsans.className}>
      <body>{children}</body>
    </html>
  );
}