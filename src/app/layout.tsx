import '../styles/globals.css';
import { ConditionalNavbar } from './components/ConditionalNavbar';
import { UserProvider } from '@/context/UserContext';
import { ConditionalMarginWrapper } from './components/ConditionalMarginWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div className="flex bg-[#f4f4fa]">
            <ConditionalNavbar />
            <ConditionalMarginWrapper>
              {children}
            </ConditionalMarginWrapper>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}