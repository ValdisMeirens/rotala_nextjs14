"use client";
import styles from "./rotala_container.module.css";
import { useState, useEffect } from "react";

const RotalaContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalDivs = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        return nextIndex > totalDivs ? 1 : nextIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 1
                ? `${styles.r_letter} ${styles.letter}`
                : styles.r_letter
            }
          >
            R
          </div>

          <div
            className={
              currentIndex === 1
                ? `${styles.text_1} ${styles.text_vissible}`
                : styles.text_1
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 1
          </div>
        </div>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 2
                ? `${styles.o_letter} ${styles.letter}`
                : styles.o_letter
            }
          >
            O
          </div>
          <div
            className={
              currentIndex === 2
                ? `${styles.text_2} ${styles.text_vissible}`
                : styles.text_2
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 2
          </div>
        </div>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 3
                ? `${styles.t_letter} ${styles.letter}`
                : styles.t_letter
            }
          >
            T
          </div>
          <div
            className={
              currentIndex === 3
                ? `${styles.text_3} ${styles.text_vissible}`
                : styles.text_3
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 3
          </div>
        </div>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 4
                ? `${styles.a_letter_first} ${styles.letter}`
                : styles.a_letter_first
            }
          >
            A
          </div>
          <div
            className={
              currentIndex === 4
                ? `${styles.text_4} ${styles.text_vissible}`
                : styles.text_4
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 4
          </div>
        </div>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 5
                ? `${styles.l_letter} ${styles.letter}`
                : styles.l_letter
            }
          >
            Ļ
          </div>
          <div
            className={
              currentIndex === 5
                ? `${styles.text_5} ${styles.text_vissible}`
                : styles.text_5
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 5
          </div>
        </div>
        <div className={styles.letter_container}>
          <div
            className={
              currentIndex === 6
                ? `${styles.a_letter_second} ${styles.letter}`
                : styles.a_letter_second
            }
          >
            A
          </div>
          <div
            className={
              currentIndex === 6
                ? `${styles.text_6} ${styles.text_vissible}`
                : styles.text_6
            }
          >
            Daram ko varam, cik vien labi vien varam, visu savam baram 6
          </div>
        </div>
      </div>

      <div className={styles.mobile_textcontainer}>
        <div className={styles.mobile_letter_container}>
          <div
            className={
              currentIndex === 1
                ? `${styles.mobile_r_letter} ${styles.letter}`
                : styles.mobile_r_letter
            }
          >
            R
          </div>
          <div
            className={
              currentIndex === 2
                ? `${styles.mobile_o_letter} ${styles.letter}`
                : styles.mobile_o_letter
            }
          >
            0
          </div>
          <div
            className={
              currentIndex === 3
                ? `${styles.mobile_t_letter} ${styles.letter}`
                : styles.mobile_t_letter
            }
          >
            T
          </div>
          <div
            className={
              currentIndex === 4
                ? `${styles.mobile_a_letter_first} ${styles.letter}`
                : styles.mobile_a_letter_first
            }
          >
            A
          </div>
          <div
            className={
              currentIndex === 5
                ? `${styles.mobile_l_letter} ${styles.letter}`
                : styles.mobile_l_letter
            }
          >
            Ļ
          </div>
          <div
            className={
              currentIndex === 6
                ? `${styles.mobile_a_letter_second} ${styles.letter}`
                : styles.mobile_a_letter_second
            }
          >
            A
          </div>
        </div>

        <div
          className={
            currentIndex === 1
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 1
        </div>
        <div
          className={
            currentIndex === 2
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 2
        </div>
        <div
          className={
            currentIndex === 3
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 3
        </div>
        <div
          className={
            currentIndex === 4
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 4
        </div>

        <div
          className={
            currentIndex === 5
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 5
        </div>
        <div
          className={
            currentIndex === 6
              ? `${styles.mobile_text_1} ${styles.mobile_text_vissible}`
              : styles.mobile_text_1
          }
        >
          Daram ko varam, cik vien labi vien varam, visu savam baram 6
        </div>
      </div>
    </section>
  );
};

export default RotalaContainer;
