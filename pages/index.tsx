import type { NextPage } from "next";
import Head from "next/head";

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
        Features Company Careers About Login Register Make remote work Get your
        team in sync, no matter your location. Streamline processes, create team
        rituals, and watch productivity soar. Learn more
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
