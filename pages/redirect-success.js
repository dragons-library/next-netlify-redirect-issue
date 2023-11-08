import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function RedirectSuccess() {
  return (
    <div className="container">
      <Head>
        <title>Redirect Success!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Success!" />
        <p className="description">
          You were successfully redirect to <code>/redirect-success</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
