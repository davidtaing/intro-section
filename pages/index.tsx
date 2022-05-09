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
          ></Image>
        </div>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </main>
    </div>
  );
};

export default Home;
