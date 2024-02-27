import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/svg/facebooksvgrepocomgrey.svg";
import instagram from "../../../public/svg/instagramsvgrepocomgrey.svg";
import youtube from "../../../public/svg/youtubesvgrepocomgrey.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialnetworkcontainer}>
        <Link
          href="https://instagram.com/tdarotala"
          className={styles.socialnetwork}
          target="_blank"
        >
          <Image src={instagram} alt="Instagram" fill className={styles.img} />
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
      <div className={styles.textcontainer}>TDA ROTAĻA</div>
    </div>
  );
};

export default Footer;
