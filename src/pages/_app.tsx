import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amanda Zhang</title>
        <meta name="description" content="Amanda Zhang's UX portfolio website." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className={montserrat.variable}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}