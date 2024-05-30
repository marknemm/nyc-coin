'use client';

import DexChart from '@/components/dex-chart/dex-chart';
import Fade from '@/components/fade/fade';
import JupiterTerminal from '@/components/jupiter-terminal/jupiter-terminal';
import Image from 'next/image';
import styles from './page.module.css';

/**
 * The {@link HomePage} component.
 *
 * @returns The {@link HomePage} component JSX.
 */
export default function HomePage() {
  return (
    <main>
      <section className={`${styles.section} ${styles.first}`}>
        <div className={styles.background}>
          <Image
            src="/HERO_BG.png"
            alt=""
            fill
            priority
          />
        </div>

        <div className={`${styles.mainLogos}`}>
          <h1 className={styles.nycContainer}>
            <Image
              src="/$NYC_Logo.png"
              alt="$NYC"
              fill
              priority
            />
          </h1>

          <div className={styles.gothamContainer}>
            <Image
              src="/Sol_Of_Gotham.png"
              alt="The SOL of Gotham"
              fill
              priority
            />
          </div>

          <div className={styles.interboroContainer}>
            <Image
              src="/Interboro_Currency.svg"
              alt="The only interboro currency"
              fill
              priority
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.second}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION2_BG.png"
            alt=""
            fill
          />
        </div>

        <Fade
          className={`${styles.content}`}
          direction="right"
          triggerOnce
        >
          <div className={styles.title}>
            <h2>
              <Image
                src="/FuckAnotherMeme.svg"
                alt="Fuck another memecoin?"
                fill
              />
            </h2>
          </div>

          <p>
            NO. WE ARE $NYC, LEGIT NEW YORKERS. TEN TOES DOWN.
          </p>

          <p>
            WE’RE BUILDING BEYOND A CORNY, HACK PHOTOSHOP JOB OR HOT, DUMB NARRATIVE.
          </p>

          <p>
            THIS INITIATIVE SPEAKS TO THE CALIBER AND CULTURE OF CITY THAT WE LOVE.
            THE CITY THAT’S BETTER THAN EVERY OTHER. $NYC—THE CITY THAT PLAYS FOR KEEPS.
          </p>
        </Fade>
      </section>

      <section className={`${styles.section} ${styles.third}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION3_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <h2>
            <Image
              src="/StreetByStreet.svg"
              alt="Street by street. Block by block. Trade by trade."
              fill
            />
          </h2>
        </div>

        <Fade
          className={`${styles.content}`}
          direction="left"
          triggerOnce
        >
          <p>
            RUN ON SOLANA. THE FASTEST AND STURDIEST CHAIN.
            NO REASON TO ARGUE. NO ABILITY TO RESEARCH.
            IT JUST IS.
          </p>

          <p>
            YEAH, YEAH, YEAH, DON’T WORRY.
            YOU’RE STILL EARLY.
            CANDLES SO HIGH, THEY’LL SCRAPE THE FUCKING SKY.
          </p>
        </Fade>
      </section>

      <section className={`${styles.section} ${styles.fourth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION4_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <h2>
            <Image
              src="/FirstTime.svg"
              alt="First time"
              fill
            />
          </h2>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fifth}`}>
        {/* <div className={`${styles.background}`}>
          <Image
            src="/Overlay.svg"
            alt=""
            fill
          />
        </div> */}

        <div className={`${styles.sectionHeadline}`}>
          <h2>
            <Image
              src="/LongTime.svg"
              alt="Long Time."
              fill
            />
          </h2>
        </div>

        <Fade
          className={`${styles.content}`}
          triggerOnce
        >
          <p>
            THE STRUGGLE IS REAL. PROJECTS ARE MESSY. AND WE CONTINUE BECAUSE IT MATTERS TOO MUCH TO US.<br />
            $NYC WILL EVENTUALLY BE USED TO BUY QUALITY GOODS FROM YOUR HARD-BOILED, ALL-BORO KINGS HERE AT THE HELM.<br />
            SHIT THAT WILL ONLY BE AVAILABLE HERE AND FROM US. NO NFTS. JUST REAL SHIT. TRUST.
          </p>
        </Fade>
      </section>

      <section className={`${styles.section} ${styles.sixth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION5_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <h2>
            <Image
              src="/SweatTheTech.svg"
              alt="Sweat the tech."
              fill
            />
          </h2>
        </div>

        <div className={`${styles.content}`}>
          <Fade triggerOnce>
            <p>
              Don’t take our word for it. Look at the numbers. They Don’t lie.<br/>
              Unless you’re a scumbag influencer shilling a domestic animal coin.
            </p>
          </Fade>

          <h3 className={`${styles.title}`}>
            Get Some $NYC Bags
          </h3>
          <JupiterTerminal />

          <h3 className={`${styles.title}`}>
            Very $NYC Numbers
          </h3>
          <DexChart />
        </div>
      </section>

      <div className={`${styles.section} ${styles.seventh}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION6_BG.png"
            alt=""
            fill
          />
        </div>

        <Fade
          className={`${styles.content}`}
          direction="up"
          triggerOnce
        >
          <p>
            YOU KNOW THE DEAL.
            DO SOME SHIT.
            CHANGE YOUR LIFE.
            FOR STARTERS, HIT US UP.
            ASK SOME QUESTIONS.
          </p>

          <p>
            BTW, WE ONLY HAVE A TG.
            DISCORD IS FOR GAMERS—
            WE’RE BALLERS.
          </p>
        </Fade>
      </div>
    </main>
  );
}
