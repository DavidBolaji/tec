import Head from 'next/head';
import AboutCom from './../../components/App/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tec in every home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutCom />
    </div>
  )
}