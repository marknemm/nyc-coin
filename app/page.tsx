'use client';

import styles from '@/app/page.module.css';
import Image from "next/image";
import { Fade } from 'react-awesome-reveal';

/**
 * The {@link HomePage} component.
 *
 * @returns The {@link HomePage} component JSX.
 */
export default function HomePage() {
  return (
    <main>
      <div className={`${styles.section} ${styles.first}`}>
        <div className={styles.background}>
          <Image
            src="/HERO_BG.png"
            alt=""
            fill
            priority
          />
        </div>

        <div className={`${styles.mainLogos}`}>
          <div className={styles.nycContainer}>
            <Image
              src="/$NYC_Logo.png"
              alt="$NYC Logo"
              fill
              priority
            />
          </div>

          <div className={`${styles.subLogos}`}>
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
        </div>
      </div>

      <div className={`${styles.section} ${styles.second}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION2_BG.png"
            alt=""
            fill
          />
        </div>

        <Fade
          direction="right"
          triggerOnce
        >
          <div className={`${styles.textContent}`}>
            <div className={styles.title}>
              <div>
                <Image
                  src="/FuckAnotherMeme.svg"
                  alt="Fuck another memecoin?"
                  fill
                />
              </div>
            </div>

            <div className={styles.description}>
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
            </div>
          </div>
        </Fade>
      </div>

      <div className={`${styles.section} ${styles.third}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION3_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <div>
            <Image
              src="/StreetByStreet.svg"
              alt="Street by street. Block by block. Trade by trade."
              fill
            />
          </div>
        </div>

        <div className={`${styles.description}`}>
          <Fade
            direction="left"
            triggerOnce
          >
            <div>
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
            </div>
          </Fade>
        </div>
      </div>

      <div className={`${styles.section} ${styles.fourth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION4_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <div>
            <Image
              src="/FirstTime.svg"
              alt="First time"
              fill
            />
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.fifth}`}>
        <div className={`${styles.sectionHeadline}`}>
          <div>
            <Image
              src="/LongTime.svg"
              alt="Long Time."
              fill
            />
          </div>
        </div>

        <Fade triggerOnce>
          <div>
            THE STRUGGLE IS REAL. PROJECTS ARE MESSY. AND WE CONTINUE BECAUSE IT MATTERS TOO MUCH TO US.
            $NYC WILL EVENTUALLY BE USED TO BUY QUALITY GOODS FROM YOUR HARD-BOILED, ALL-BORO KINGS HERE
            AT THE HELM. SHIT THAT WILL ONLY BE AVAILABLE HERE AND FROM US. NO NFTS. JUST REAL SHIT. TRUST.
          </div>
        </Fade>
      </div>

      <div className={`${styles.section} ${styles.sixth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION5_BG.png"
            alt=""
            fill
          />
        </div>

        <div className={`${styles.sectionHeadline}`}>
          <div>
            <Image
              src="/SweatTheTech.svg"
              alt="Sweat the tech."
              fill
            />
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.seventh}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION6_BG.png"
            alt=""
            fill
          />
        </div>

        <Fade direction="up" triggerOnce className={`${styles.textBlocks}`}>
          <div className={`${styles.layout}`}>
            <div>
              YOU KNOW THE DEAL.
              DO SOME SHIT.
              CHANGE YOUR LIFE.
              FOR STARTERS, HIT US UP.
              ASK SOME QUESTIONS.
            </div>

            <div>
              BTW, WE ONLY HAVE A TG.
              DISCORD IS FOR GAMERS—
              WE’RE BALLERS.
            </div>
          </div>
        </Fade>
      </div>
    </main>
  );
}
