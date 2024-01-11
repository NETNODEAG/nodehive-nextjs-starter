import { siteConfig } from '@/config/site';

import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Netnode',
    default: siteConfig?.title,
  },
  description: siteConfig?.description,
  metadataBase: new URL(siteConfig?.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
