import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ClientOnly from "@/components/ClientOnly";
import { ThemeProvider } from "next-themes";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "K.K | Developer Portfolio",
    template: "%s | Krzysztof Kaszuba",
  },
  description:
    "Portfolio of Krzysztof Kaszuba – Full-Stack Web Developer, Game Designer, and IT Support Specialist.",
  keywords: [
    "Krzysztof Kaszuba",
    "Web Developer",
    "Game Developer",
    "Next.js Portfolio",
    "Frontend",
    "IT Support",
    "Vaniliatime",
  ],
  metadataBase: new URL("https://kkaszuba.eu"),
  openGraph: {
    title: "Krzysztof Kaszuba | Portfolio",
    description:
      "Showcasing projects in web development, game design and tech support.",
    url: "https://kkaszuba.eu",
    siteName: "Krzysztof Kaszuba Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krzysztof Kaszuba Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krzysztof Kaszuba | Portfolio",
    description:
      "Showcasing projects in web development, game design and tech support.",
    images: ["/og-image.png"],
  },
    icons: {
    icon: "/favicon.ico",
  },
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">

          <ClientOnly>
            <Navbar />
          </ClientOnly>

          <main className="flex-grow">
            {children}
          </main>

          <ClientOnly>
            <Footer />
          </ClientOnly>
        </div>
      </ThemeProvider>

      </body>
    </html>
  );
}
