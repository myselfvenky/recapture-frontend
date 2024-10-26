import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from "react";


export default function Home() {

  const links = [
    {
      "name": "Voice Models",
      "url": "/"
    },
    {
      "name": "SDK",
      "url": "/about"
    },
    {
      "name": "About",
      "url": "/contact"
    },
    {
      "name": "Login",
      "url": "/login"
    }
  ]



  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <h2 className={styles.cname}>Recapture</h2>
        <div className={styles.links}>
          {links.map((e, index) => {
            return (
              <div
                key={index}
                className={styles.link_cont}
              >
                <Link href={e.url}
                  className={styles.link}
                >
                  {e.name}
                </Link>
                {!(links.length == index + 1) && <div className={styles.bar} />}
              </div>
            )
          })}
          <Link href={"/"}>

          </Link>

        </div>
      </div>
      <div className={styles.base}>
        <div className={styles.left}>

        </div>
        <div className={styles.right}>
        </div>

      </div>
      {/* <h1 className={styles.title}>
        RECAPTURE
      </h1>
      <h2>
        Effortless Meeting Minutes!
      </h2>
      <div className={styles.bar} /> */}
    </div>
  );
}
