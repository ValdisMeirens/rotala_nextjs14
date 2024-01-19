import Link from "next/link";
import Image from "next/image";
import rimbulis from "../../../public/nav/rimbulis.png";
import rotala from "../../../public/nav/rotala_logo.png";
import styles from "./nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowNavLinks] = useState(false);

  const mouseEnterHandler = () => {
    setShowNavLinks(true);
  };

  const mouseLeaveHandler = () => {
    setShowNavLinks(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.rotalacontainer}>
          <Link href="/">
            <Image
              src={rotala}
              alt="Rotaļas Logo"
              fill
              className={styles.rotala}
            />
          </Link>
        </div>
        <div
          className={styles.rimbuliscontainer}
          onMouseEnter={mouseEnterHandler}
        >
          <Image
            src={rimbulis}
            alt="rimbulis"
            fill
            className={styles.rimbulis}
          />
        </div>
      </div>
      {showLinks && (
        <nav className={styles.linkcontainer} onMouseLeave={mouseLeaveHandler}>
          <ul>
            <Link href="/" className={styles.link}>
              <li>JAUNUMI</li>
            </Link>
            <Link href="/galerija" className={styles.link}>
              <li>GALERIJA</li>
            </Link>
            <Link href="/vadiba" className={styles.link}>
              <li>VADĪBA</li>
            </Link>
            <Link href="/dejotaji" className={styles.link}>
              <li>DEJOTĀJI</li>
            </Link>
            <Link href="/par_mums" className={styles.link}>
              <li>PAR MUMS</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
