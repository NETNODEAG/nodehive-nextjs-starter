import { siteConfig } from '@/nodehive/space.config';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
            <main className="container mx-auto my-16 px-4 md:px-8">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
