"use client";

import { useEffect, useRef } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Mouse move
    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    // Scroll effect
    const onScroll = () => {
      cursor.classList.add(styles.scroll);
      clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        cursor.classList.remove(styles.scroll);
      }, 120);
    };

    // Hover grow
    const addHover = () => cursor.classList.add(styles.hover);
    const removeHover = () => cursor.classList.remove(styles.hover);

    document.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", onScroll);

    document.querySelectorAll("a, button, img").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}
