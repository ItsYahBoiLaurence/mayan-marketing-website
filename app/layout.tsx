import type { Metadata } from "next";
import "./globals.css";
import { Box, MantineProvider, Stack, createTheme, rem } from '@mantine/core'
import '@mantine/core/styles.css';
import Navbar from "./components/NavBar";
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: "Mayan Solutions",
  description: "Mayan Solutions",
  icons: {
    icon: "/logo.png"
  }
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
  black: '#1e1e1e',
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
      <body>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html >
  );
}
