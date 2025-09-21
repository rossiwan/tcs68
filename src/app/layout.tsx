import './globals.css';
import { PortfolioProvider } from '../context/PortfolioContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
