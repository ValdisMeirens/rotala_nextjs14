"use client";

import Image from "next/image";
import styles from "./contacts_container.module.css";
import face from "../../../public/contacts/face.svg";
import social from "../../../public/contacts/social_network.svg";
import facebook from "../../../public/contacts/instagram.svg";
import instagram from "../../../public/contacts/fb.svg";
import youtube from "../../../public/contacts/youtube.svg";
import Link from "next/link";

const ContactsContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.imagecontainer}>
          <Image src={face} className={styles.img_logo} alt="face" fill />
        </div>
        <div className={styles.textcontainer}>
          <div className={styles.infocontainer}>
            <div className={styles.name}>Diāna Gavare</div>
            <div className={styles.title}>
              TDA &quot;Rotaļa&quot; mākslinieciskā vadītāja
            </div>
            <div className={styles.email}>gavarediana@gmail.com</div>
          </div>
          <div className={styles.infocontainer}>
            <div className={styles.name}>Linards Graumanis</div>
            <div className={styles.title}>
              TDA &quot;Rotaļa&quot; prezidents
            </div>
            <div className={styles.email}>linardsgraumanis@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        {/* <div className={styles.imagecontainer}>
          <Image src={social} className={styles.img_logo} alt="face" fill />
        </div> */}
        <div className={styles.socialcontainer}>
          <Link
            href="https://instagram.com/tdarotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image
              src={instagram}
              alt="Instagram"
              fill
              className={styles.img}
            />
          </Link>
          <Link
            href="https://www.facebook.com/TdaRotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image src={facebook} alt="Facebook" fill className={styles.img} />
          </Link>
          <Link
            href="https://www.youtube.com/@tdaRotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image src={youtube} alt="youtube" fill className={styles.img} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactsContainer;
