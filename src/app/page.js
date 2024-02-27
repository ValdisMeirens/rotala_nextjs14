import styles from "./home.module.css";
import Footer from "@/components/footer/footer";
import ContactsContainer from "@/components/news/contacts_container";
import EventContainer from "@/components/news/events_container";
import ImageContainer from "@/components/news/image_container";
import LogoContainer from "@/components/news/logo_container";
import RotalaContainer from "@/components/news/rotala_container";

async function getNews() {
  const res = await fetch(`http://localhost:3000/api/news`);
  return res.json();
}

async function getCalendar() {
  const res = await fetch(`http://localhost:3000/api/kalendars`);
  return res.json();
}

export default async function Home() {
  const news = getNews();
  const calendar = getCalendar();
  const [news_data, calendar_data] = await Promise.all([news, calendar]);

  return (
    <div className={styles.container}>
      <LogoContainer />
      {/* <ImageContainer news={news_data} /> */}
      <EventContainer calendar={calendar_data} />
      <RotalaContainer />
      <ContactsContainer />
      <Footer />
    </div>
  );
}
