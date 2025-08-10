import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DJReklesz IPTV",
  description: "Premium IPTV streaming platform by DJReklesz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || (!theme && prefersDark);
                  var classList = document.documentElement.classList;
                  
                  if (isDark) {
                    classList.add('theme-dark');
                  } else {
                    classList.add('theme-light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} transition-all duration-300 min-h-screen`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
