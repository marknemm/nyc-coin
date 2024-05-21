import Image from "next/image";
import styles from '@/app/ui/home.module.css';

/**
 * The Home page component.
 *
 * @returns The Home page component JSX.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={`${styles.section} ${styles.first}`}>
        <div className={styles.background}>
          <Image
            src="/HERO_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className={styles.nycContainer}>
          <Image
            src="/$NYC_Logo.png"
            alt="$NYC Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className={styles.gothamContainer}>
          <Image
            src="/Sol_Of_Gotham.png"
            alt="The SOL of Gotham"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className={styles.interboroContainer}>
          <Image
            src="/Interboro_Currency.svg"
            alt="The only interboro currency"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.second}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION2_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.textContent}>
          <div className={styles.title}>
            Fuck,<br/> Another Memecoin?
          </div>

          <div className={styles.description}>
            <p>
              EH. NOT REALLY. WE DEVS OF $NYC,
              ARE LEGIT NEW YORKERS. LIVE + WORK HERE.
              THAT’S NO SHIT. GOT THE DL TO PROVE IT.
            </p>

            <p>
              WE’RE BUILDING A PROJECT, FOR REALS.
              BEYOND A CORNY, HACK PHOTOSHOP JOB OR
              HOT, DUMB NARRATIVE OF THE MOMENT.
            </p>

            <p>
              THIS INITIATIVE SPEAKS TO THE CALIBER OF
              CITY THAT WE LOVE. THE CITY THAT’S BETTER
              THAN EVERY OTHER ONE.
            </p>

            <p>
              $NYC—THE CITY THAT PLAYS FOR KEEPS.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.third}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION3_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={`${styles.description}`}>
          <p>
            SO….THIS PROJECT RUNS ON SOLANA.
          </p>

          <p>
            IT’S THE FASTEST AND STURDIEST CHAIN.
            NO REASON TO ARGUE. OR RESEARCH.
            IT JUST IS.
          </p>

          <p>
            GET A WALLET, BUY SOL AND THEN
            SWAP IN SOME $NYC.
          </p>

          <p>
            AND YEAH, YEAH, YEAH, DON’T WORRY.
          </p>

          <p>
            YOU’RE STILL EARLY.
          </p>

          <p>
            WE AIMING TO SCRAPE THAT FUCKING SKY.
          </p>
        </div>
      </div>

      <div className={`${styles.section} ${styles.fourth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION4_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.fifth}`}>
        THE STRUGGLE IS REAL. PROJECTS ARE MESSY. AND WE CONTINUE BECAUSE IT MATTERS TOO MUCH TO US.
        $NYC WILL EVENTUALLY BE USED TO BUY QUALITY GOODS FROM YOUR HARD-BOILED, ALL-BORO KINGS HERE
        AT THE HELM. SHIT THAT WILL ONLY BE AVAILABLE HERE AND FROM US. NO NFTS. JUST REAL SHIT. TRUST.
      </div>

      <div className={`${styles.section} ${styles.sixth}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION5_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.seventh}`}>
        <div className={`${styles.background}`}>
          <Image
            src="/SECTION6_BG.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>

        <div className={`${styles.textBlocks}`}>
          <div>
            YOU KNOW THE DEAL.
            DO SOME SHIT.
            CHANGE YOUR LIFE.
            FOR STARTERS, HIT US UP.
            ASK SOME QUESTIONS.
          </div>

          <div>
            <p>
              BTW, WE ONLY HAVE A TG.
              DISCORD IS FOR GAMERS—
              WE’RE BALLERS.
            </p>

            <p>
              SEE YOU ON THE NEXT FLR
              AS WE GET ELEVATED.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
