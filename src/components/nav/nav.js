import Link from "next/link";
import Image from "next/image";
import rimbulis from "../../../public/nav/rimbulis.png";
import close from "../../../public/nav/close.svg";

import rotala from "../../../public/nav/rotala_logo.png";
import styles from "./nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowNavLinks] = useState(false);
  const [showOverLay, setShowOverLay] = useState(false);

  const mouseEnterHandler = () => {
    setShowNavLinks(true);
  };

  const mouseLeaveHandler = () => {
    setShowNavLinks(false);
  };

  const onClickHandler = () => {
    setShowOverLay(!showOverLay);
    console.log(showOverLay);
    if (!showOverLay === true) {
      document.querySelector("div").style.overflow = "hidden";
      console.log(showOverLay);
    } else if (!showOverLay === false) {
      document.querySelector("div").style.overflow = "";
      console.log(showOverLay);
    }
  };

  return (
    <>
      <div className={styles.desktop_container}>
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

      {!showOverLay && (
        <div className={styles.mobile_container}>
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

          <div className={styles.hambugercontainer} onClick={onClickHandler}>
            <Image
              src={rimbulis}
              alt="rimbulis"
              fill
              className={styles.rimbulis}
            />
          </div>
        </div>
      )}

      {showOverLay && (
        <div className={styles.overlaycontainer} onClick={onClickHandler}>
          <div className={styles.navlogocontainer}>
            <div className={styles.logocontainer}>
              <Image
                src={rotala}
                alt="Rotaļas Logo"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.closecontainer} onClick={onClickHandler}>
              <Image src={close} alt="close" fill className={styles.close} />
            </div>
          </div>
          <div className={styles.navtextcontainer}>
            <Link href="/" className={styles.size}>
              JAUNUMI
            </Link>
            <Link
              href="/galerija"
              className={styles.size}
              onClick={onClickHandler}
            >
              GALERIJA
            </Link>
            <Link href="/vadiba" className={styles.size}>
              VADĪBA
            </Link>
            <Link href="/dejotaji" className={styles.size}>
              DEJOTĀJI
            </Link>
            <Link href="/par_mums" className={styles.size}>
              PAR MUMS
            </Link>
          </div>
        </div>
      )}

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
