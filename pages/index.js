import Head from 'next/head'
import Link from 'next/link'
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>War against virus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Let's fight war against covid-19 with correct information.
        </h1>

        <p className="description">
          <code>
            If virus can work so well, why can't we work together.
            Humans are divided, virus is not.
            <hr></hr>
            We are in this together.

          </code>
        </p>

        <div className="grid">
          < div className="card">
          <h3><Link href="/useful-links"><a>Useful Links &rarr;</a></Link>  </h3>
            <p>All useful links in this difficult times.</p>
          </div >

          {/*<div  className="card">*/}
          {/*  <h3><Link href="/hospitals"><a>Hosptials &rarr;</a></Link></h3>*/}
          {/*  <p>Check status of hospitals and beds</p>*/}
          {/*</div>*/}

          <div  className="card" >
            <h3><Link href="/social-media"><a>Social Media &rarr;</a></Link></h3>
            <p>Check ongoing efforts on social media</p>
          </div>



          <div className="card">
            <h3><Link href="/contribute"><a>Contribute &rarr;</a></Link></h3>
            <p>
              You can always help.
            </p>
          </div>

          {/*<div className="card">*/}
          {/*  <h3><Link href="/hoaxes"><a>Misleading info &rarr;</a></Link></h3>*/}
          {/*  <p>Social media hoaxes</p>*/}
          {/*</div>*/}

          <div className="card">
            <h3><Link href="/about-us"><a>About us &rarr;</a></Link></h3>
            <p>We are just common people</p>
          </div>
        </div>
        <Container>
          < div className="card">
            <p>Content of this website has been crowdsourced. We don't have complete control or any interest over information shared. We do preliminary verification of the source. User are advised to use their discretion while using any of the information. We also urge you to notify to us whenever any information is helpful to you or it is misleading for betterment of community.</p>
          </div>
        </Container>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          U and ME
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
