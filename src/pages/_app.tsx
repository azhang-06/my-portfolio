import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat, Quicksand } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const helloRadio = localFont({
  src: "../../public/fonts/Hello Radio.otf",
  variable: "--font-script",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amanda Zhang</title>
        <meta name="description" content="Amanda Zhang's UX portfolio website." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className={`${montserrat.variable} ${quicksand.variable} ${helloRadio.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}