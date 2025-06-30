import htmlLogo from "@/images/html.svg";
import cssLogo from "@/images/css.svg";
import jsLogo from "@/images/javascript.svg";
import tsLogo from "@/images/typescript.svg";
import scssLogo from "@/images/sass.svg";
import reactLogo from "@/images/react.svg";
import tailwindLogo from "@/images/tailwind.svg";
import sqlLogo from "@/images/sql.svg";
import profilePic from "@/images/wannika.jpg";
import Image from "next/image";
import styles from "./page.module.css";
import QAndA from "@/components/home/QAndA";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles["grid-container"]}>
                <div className={styles["profile-pic-container"]}>
                    <Image
                        src={profilePic}
                        alt='Wannika"s profile picture'
                        placeholder="blur"
                        sizes="(max-width: 960px) 90vw, 50vw"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.description}>
                    <h1>Hello!</h1>
                    <p>My name is Wannika Kuankachorn. I was born in 1993.</p>
                    <p>
                        I graduated the bachelor degree in music, I have learned
                        how to code from the internet.
                    </p>
                    <h2>Certificates:</h2>
                    <p>
                        <a
                            href="https://certificates.cs50.io/ec25bdb3-a4e7-4f03-9906-cd8ca380bd82.pdf?size=letter"
                            target="_blank"
                        >
                            CS50x Certificate
                        </a>
                        <span className={styles["cs50-link"]}>
                            (see my{" "}
                            <Link href="/projects/17">final project</Link>)
                        </span>
                    </p>
                    <p>
                        <a
                            href="https://www.freecodecamp.org/certification/Wannika/responsive-web-design"
                            target="_blank"
                        >
                            Responsive Web Design Certificate
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.freecodecamp.org/certification/Wannika/javascript-algorithms-and-data-structures-v8"
                            target="_blank"
                        >
                            JavaScript Algorithms and Data Structures
                            Certificate
                        </a>
                    </p>
                    <h2>Languages or frameworks that I can write:</h2>
                    <div className={styles.languages}>
                        <Image sizes="50px" src={htmlLogo} alt="HTML logo" />
                        <Image sizes="50px" src={cssLogo} alt="CSS logo" />
                        <Image
                            sizes="50px"
                            src={jsLogo}
                            alt="JavaScript logo"
                        />
                        <Image sizes="50px" src={scssLogo} alt="Sass logo" />
                        <Image sizes="50px" src={reactLogo} alt="React logo" />
                        <Image
                            sizes="50px"
                            src={tsLogo}
                            alt="Typescript logo"
                        />
                        <svg
                            id="next-logo"
                            height="50"
                            width="50"
                            fill="#000"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m386.3985596 35.5079727c-169.3385315-99.5687332-384.5140285 22.0419274-386.3862926 218.3738175-1.8282685 191.716507 201.0625916 315.5454712 370.0206604 231.1632233l-184.4725331-271.408722.0000305 167.9969177c0 18.6138916-35.6191101 18.6138916-35.6191101 0v-225.2124176c0-14.7758484 27.4472504-15.9884033 35.2252045-3.1443481l210.2631683 317.2959595c157.9509888-101.737259 155.8170166-338.1359864-9.0311279-435.0644303zm-23.7556153 317.9385605-35.7316284-54.5765381v-149.4116669c0-13.9324646 35.7316284-13.9324646 35.7316284 0z" />
                        </svg>
                        <Image
                            sizes="50px"
                            src={tailwindLogo}
                            alt="tailwind CSS logo"
                        />
                        <Image sizes="50px" src={sqlLogo} alt="sql logo" />
                    </div>
                </div>
            </div>

            <QAndA />
        </main>
    );
}
