import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import PlausibleProvider from 'next-plausible';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Green Trading Bot',
  description:
    'Eco-friendly algorithmic trading bot for sustainable investing. Optimize your portfolio while supporting green initiatives.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PlausibleProvider domain="green-trading-bot.up.railway.app">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </PlausibleProvider>
    </html>
  );
}
