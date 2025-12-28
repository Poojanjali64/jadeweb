"use client";

import styles from "./FloatingSocials.module.css";

export default function FloatingSocials() {
  return (
    <div className={styles.socials}>
      <a href="#" aria-label="Facebook">f</a>
      <a href="#" aria-label="Instagram">◎</a>
      <a href="#" aria-label="YouTube">▶</a>
    </div>
  );
}
