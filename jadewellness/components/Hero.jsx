"use client";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={`${styles.text} ${show ? styles.show : ""}`}>
          <h1>
            Wellness care for your journey <br />
            with <span>Jade Wellness</span>
          </h1>

          <p>
            Evidence-based integrative medicine focused on long-term healing
            and holistic wellbeing.
          </p>

          <button className={styles.cta}>Book Appointment →</button>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className={styles.collage}>
          {[
            "iv.jpg",
            "acupuncture.jpg",
            "oxygen.jpg",
            "sauna.jpg",
            "therapy.jpg"
          ].map((img, i) => (
            <div
              key={i}
              className={`${styles.card} ${show ? styles.show : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img src={`/images/${img}`} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
