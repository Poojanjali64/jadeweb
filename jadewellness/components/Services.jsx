"use client";

import styles from "./Services.module.css";

const services = [
  "Colon Hydrotherapy",
  "Medical Ozone Therapy",
  "IV Nutrition Drips",
  "Far Infrared Sauna",
  "Clinical Acupuncture",
  "Fire Cupping",
];

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Our Services</h2>

      <div className={styles.grid}>
        {services.map((title, i) => (
          <div
            key={title}
            className={styles.card}
            style={{ "--delay": `${i * 0.15}s` }}
          >
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.link}>Learn More →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
