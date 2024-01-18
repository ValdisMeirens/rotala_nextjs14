import styles from "./home.module.css";
import Footer from "@/components/footer/footer";
import ImageContainer from "@/components/news/image_container";

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
      <ImageContainer key={news.id} news={news_data} />
      <section className={styles.eventcontainer}>
        TUVĀKIE PASĀKUMI CONTAINER
      </section>
      <section className={styles.infocontainer}>
        PAPILDUS INFO CONTAINER
      </section>
      <Footer />
    </div>
  );
}
