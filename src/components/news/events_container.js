"use client";

import styles from "./events_container.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import rotala from "../../../public/nav/rotala_logo.png";

const EventContainer = ({ calendar }) => {
  // const variants = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: { duration: 1, type: "tween", delay: 0.3 },
  //   },
  // };

  const calendar_array = calendar.map((calendar_data, index) => {
    const date = new Date(calendar_data.k_datums);
    const day = date.getDate();
    let month = "";

    switch (date.getMonth()) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAI";
        break;
      case 5:
        month = "JŪN";
        break;
      case 6:
        month = "JŪL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OKT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
    }

    return (
      <motion.div
        key={calendar_data.k_id}
        className={styles.event}
        // variants={variants}
        // initial="initial"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, type: "tween", delay: 0.3 * index }}
        // whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src={`/events/${calendar_data.afisa}`}
          alt={calendar_data.k_pasakums}
          fill
          className={styles.img}
        />
        <div className={styles.datecontainer}>
          <div>{day}</div>
          <div>{month}</div>
        </div>
        <div className={styles.title}>
          {calendar_data.k_pasakums.toUpperCase()}
        </div>
      </motion.div>
    );
  });

  return (
    <section className={styles.container}>
      <div className={styles.heading}>TUVĀKIE PASĀKUMI</div>
      <div className={styles.eventscontainer}>{calendar_array}</div>
    </section>
  );
};

export default EventContainer;
