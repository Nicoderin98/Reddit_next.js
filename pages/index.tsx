import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Postbox from '../components/Postbox'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0 CLone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Postbox />
      <div>

      </div>
    </div>
  )
}

export default Home
