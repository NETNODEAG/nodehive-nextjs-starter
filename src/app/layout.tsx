import { siteConfig } from '@/config/site';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/**
 * The metadata
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: {
    template: '%s | Netnode',
    default: siteConfig?.title,
  },
  description: siteConfig?.description,
  metadataBase: new URL(siteConfig?.url),
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />

          <div className="flex-[1_0_auto]">
            <main>{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
