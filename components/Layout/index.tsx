// import Navbar from './navbar'
import Head from "next/head";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Beba água</title>
        <meta name="description" content="Beba água" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
