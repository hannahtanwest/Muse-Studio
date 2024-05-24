import Head from "next/head";
import Headline from '@/components/molecules/Headline.jsx';
import AboutCards from "@/components/molecules/AboutCards";




export default function cases() {
  return (
    <>
      <Head>
        <title>MUSE Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/muse favicon.png" />
      </Head>
    <main>
      <Headline text="OUR AIM IS TO INSPIRE"/>
      <AboutCards/>
  
      
    </main>
  </>
  )
}
