import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <main>
        <header>
          <a className="logo" href="#">
            snap
          </a>
          <div className="hamburger-menu">
            <Image
              src="/images/icon-menu.svg"
              width="32"
              height="18"
              alt="menu"
              priority
            />
          </div>
        </header>
        {/* <nav>Features Company Careers About Login Register</nav> */}
        <div className="hero-image__container">
          <Image
            className="hero-image"
            src="/images/image-hero-mobile.png"
            width="375"
            height="282"
            alt="Hero Image"
            priority
          />
        </div>
        <div className="text-container">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="button--black block-center">Learn more</button>
          <div className="clients__container flex space-between mt-48">
            <Image
              className="client-logo"
              src="/images/client-databiz.svg"
              height="14.36"
              width="81.25"
              alt="Databiz logo"
              layout="fixed"
            />
            <Image
              className="client-logo"
              src="/images/client-audiophile.svg"
              height="26"
              width="52.87"
              alt="Audiophile logo"
              layout="fixed"
            />
            <Image
              className="client-logo"
              src="/images/client-meet.svg"
              height="14.36"
              width="64.14"
              alt="Meet logo"
              layout="fixed"
            />
            <Image
              className="client-logo"
              src="/images/client-maker.svg"
              height="17.23"
              width="58.9"
              alt="Maker logo"
              layout="fixed"
            />
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">David Taing</a>.
        </div>
      </footer>
    </div>
  );
};

export default Home;
