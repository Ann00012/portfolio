import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import css from "./layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  openGraph: {
    title: "Portfolio",
    description: "Portfolio",
    url: "https://images.pexels.com/photos/6893336/pexels-photo-6893336.jpeg?auto=compress&cs=tinysrgb&w=1200",
    siteName: "Portfolio",
    images: [{
      url: '',
      width: 1200,
      height: 630,
      alt:"Portfolio"
    }],
    type:'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio",
    description: "Portfolio",
    images:["https://images.pexels.com/photos/6893336/pexels-photo-6893336.jpeg?auto=compress&cs=tinysrgb&w=1200"]
  }
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div className={css.container}>
          <Header />
          {children}
           {modal}
        </div>
        <Footer />
      </body>
    </html>
  );
}
