import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reddit - Dive into anything",
  description: "Reddit is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in on Reddit.",
  icons: {
    icon: "/reddit-logo.svg",
    shortcut: "/reddit-logo.svg",
    apple: "/reddit-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#fbfbfb] dark:bg-[#101012] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
