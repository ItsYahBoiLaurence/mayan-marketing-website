import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider, createTheme, rem } from '@mantine/core'
import '@mantine/core/styles.css';
import Navbar from "./components/NavBar";
import Footer from './components/Footer'
import Script from 'next/script';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

export const metadata: Metadata = {
  title: "Mayan Solutions",
  description: "Mayan Solutions",
  icons: {
    icon: "/logo.png"
  },
};


const theme = createTheme({
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    xxl: rem(32),
  },
  headings: {
    fontWeight: rem(700),
  },
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    xxl: rem(40),
  },
  black: '#111013',
  white: "#ffffff",
  colors: {
    neon_blue: [
      "#e5f2ff",
      "#cde0ff",
      "#9bbeff",
      "#649bff",
      "#387cfe",
      "#1d69fe",
      "#095fff",
      "#004fe4",
      "#0046cd",
      "#003cb5"
    ],
    royal_blue: [
      "#ebf1fe",
      "#d4dff8",
      "#a4bcf3",
      "#7297f0",
      "#4b78ed",
      "#3564ec",
      "#2a5aed",
      "#204bd3",
      "#1842bd",
      "#0739a7"
    ],
    jonquil: [
      "#fffbe0",
      "#fff5ca",
      "#ffea99",
      "#ffde63",
      "#ffd436",
      "#ffce18",
      "#ffca01",
      "#e3b200",
      "#ca9e00",
      "#af8800"
    ]
  }
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
            (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', ${process.env.HOTJAR_ID});
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.CLARITY_ID}");
          `}
        </Script>
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          <Navbar />
          <section>
            {children}
          </section>
          <Footer />
        </MantineProvider>
      </body>
    </html >
  );
}
