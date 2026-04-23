"use client";

import { useEffect, useState } from "react";
import styles from "./IntroAnimation.module.css";
import Image from "next/image";

export default function IntroAnimation() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Mark animation complete after panels finish sliding out (~2.1s total)
    const timer = setTimeout(() => setDone(true), 2100);
    return () => clearTimeout(timer);
  }, []);

  // Once done, remove the overlay from the DOM entirely
  if (done) {
    return null;
  }

  return (
    <div className={styles.overlay} aria-hidden="true">
      {/* Scanlines texture */}
      <div className={styles.scanlines} />

      {/* Black reveal panels */}
      <div className={`${styles.panel} ${styles.panelTop}`} />
      <div className={`${styles.panel} ${styles.panelBottom}`} />

      {/* Wrapper for the logo and the glitch effects */}
      <div className={styles.logoWrap}>
        <div className={styles.glitchWrap}>
          {/* Base image */}
          <Image
            src="/images/eaosu_logo.png"
            width={65}
            height={70}
            alt="Logo of Esports at OSU"
            style={{ width: "auto", height: "auto" }}
            priority
            className={styles.logoBase}
          />
          {/* Red effect */}
          <div aria-hidden="true" className={styles.logoRed} />
          {/* Cyan effect */}
          <div aria-hidden="true" className={styles.logoCyan} />
        </div>
      </div>
    </div>
  );
}
