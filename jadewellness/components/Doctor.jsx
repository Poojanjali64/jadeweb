"use client";

import styles from "./Doctor.module.css";

export default function Doctor() {
  return (
    <section id="doctor" className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>Our Doctor</span>

          <h2 className={styles.heading}>
            Meet Our <span>Expert Physician</span>
          </h2>

          <h3 className={styles.name}>Dr. Ananya Rao</h3>

          <p className={styles.desc}>
            Dr. Ananya Rao is a certified functional medicine practitioner with
            extensive experience in integrative wellness and preventive care.
            Her approach focuses on identifying root causes rather than merely
            treating symptoms.
          </p>

          <p className={styles.desc}>
            With a patient-centric philosophy, she blends modern medical science
            with holistic healing to deliver personalized, sustainable health
            outcomes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrap}>
          <img
            src="/images/doctor.jpg"
            alt="Doctor"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}
