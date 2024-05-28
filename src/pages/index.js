import Head from "next/head";
import IndexCards from "@/components/molecules/IndexCards";
import IndexHeader from "@/components/molecules/IndexHeader";
import Loader from "@/components/molecules/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Add an empty dependency array

  return (
    <>
      <Head>
        <title>MUSE Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/muse favicon.png" />
      </Head>
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <IndexHeader />
            <IndexCards />
          </>
        )}
      </main>
    </>
  );
}
