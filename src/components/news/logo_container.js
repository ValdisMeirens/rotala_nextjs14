"use client";

import Image from "next/image";
import styles from "./logo_container.module.css";
import div1 from "../../../public/logo_container/div1.jpg";
import div2 from "../../../public/logo_container/div2.jpg";
import div3 from "../../../public/logo_container/div3.jpg";
import div4 from "../../../public/logo_container/div4.jpg";
import div5 from "../../../public/logo_container/div5.jpg";
import div6 from "../../../public/logo_container/div6.png";
import div7 from "../../../public/logo_container/div7.jpg";
import div8 from "../../../public/logo_container/div8.jpg";
import div9 from "../../../public/logo_container/div9.jpg";
import div10 from "../../../public/logo_container/div10.jpg";
import div11 from "../../../public/logo_container/div11.jpg";
import div12 from "../../../public/logo_container/div12.jpg";
import Nav from "../nav/nav";

const LogoContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navcontainer}>
        <Nav />
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.div1}>
          <Image src={div1} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div2}>
          <Image src={div2} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div3}>
          <Image src={div3} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div4}>
          <Image src={div4} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div5}>
          <Image src={div5} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div6}>
          <Image
            src={div6}
            alt="Rotaļa Logo"
            fill
            className={styles.img_logo}
          />
        </div>
        <div className={styles.div7}>
          <Image src={div7} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div8}>
          <Image src={div8} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div9}>
          <Image src={div9} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div10}>
          <Image src={div10} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div11}>
          <Image src={div11} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
        <div className={styles.div12}>
          <Image src={div12} alt="Rotaļa Logo" fill className={styles.img} />
        </div>
      </div>
    </section>
  );
};

export default LogoContainer;
