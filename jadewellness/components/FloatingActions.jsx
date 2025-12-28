"use client";

import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  return (
    <div className={styles.wrapper}>
      {/* Phone */}
      <a href="tel:+916000156001" className={styles.action}>
        <span className={styles.label}>+91 6000156001</span>
        <div className={`${styles.icon} ${styles.phone}`}>
          📞
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/916000156001"
        target="_blank"
        className={styles.action}
      >
        <span className={styles.label}>+91 6000156001</span>
        <div className={`${styles.icon} ${styles.whatsapp}`}>
          🟢
        </div>
      </a>
    </div>
  );
}
