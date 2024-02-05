import { siteConfig } from '@/config/site';

import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { createServerClient } from '@/lib/nodehive';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Netnode',
    default: siteConfig?.title,
  },
  description: siteConfig?.description,
  metadataBase: new URL(siteConfig?.url),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createServerClient();

  /*
  const logo = await client.getFragment(
    '79261be4-ca1a-4959-878f-b07fe4ed3e18',
    'space_logo'
  );
  */
  const navigation = await client.getMenuItems(
    'green-bowl-lille-mainnavigation'
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-slate-50 shadow-md lg:flex-wrap lg:justify-start">
          <nav
            className="container mx-auto mx-auto flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="font-bold">NodeHive NextJS Starter</span>
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.data.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="https://www.nodehive.com"
                className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                <span aria-hidden="true">&rarr;</span> www.nodehive.com
              </a>
            </div>
          </nav>
        </header>
        <main className='mt-32'>{children}</main>
      </body>
    </html>
  );
}
