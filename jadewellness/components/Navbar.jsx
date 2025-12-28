"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h3 className={styles.logo}>Jade Wellness</h3>

        <ul className={styles.navLinks}>
  <li>
    <a href="#home">Home</a>
  </li>

  {/* Service dropdown */}
  <li className={styles.dropdown}>
    <span>
      Service <span className={styles.arrow}>▾</span>
    </span>

    <ul className={styles.dropdownMenu}>
      <li><a href="#services">Our Services</a></li>
      <li><a href="#doctor">Doctor</a></li>
    </ul>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#blogs">Blogs</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>

        <button className="glass-btn">Book Appointment</button>
      </div>
    </nav>
  );
}
