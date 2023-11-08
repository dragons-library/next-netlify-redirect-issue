import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Netlify + Next.js Redirect Issue!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Try one of these!" />
        <p className="description">
          <Link href="/netlify-redirect">Netlify Redirect</Link> | <Link href="next-redirect">Next.js Redirect</Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
