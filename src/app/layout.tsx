import { spaceConfig } from '@/nodehive/space-config';

import Footer from '@/components/footer';
import Header from '@/components/header';

import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const { spaceMetadata } = spaceConfig;

/**
 * The metadata
 * @type {Metadata}
 */
export const metadata: Metadata = {
  metadataBase: new URL(spaceMetadata.baseUrl),
  title: spaceMetadata?.title,
  description: spaceMetadata?.description,
  icons: spaceMetadata?.icons,
  openGraph: spaceMetadata?.openGraph,
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
