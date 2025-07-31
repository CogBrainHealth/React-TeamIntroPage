"use client";

import Image from "next/image";
import styles from "./GotoButtonPage.module.css";
import { useRouter } from "next/navigation";

export default function GotoButtonPage() {
  const router = useRouter();

  return (
    <section className={styles.backgroundcss}>
      <div className="text-center">
        <button
          className={styles.imageButton}
          onClick={() => router.push("/AppIntro")}
        >
          <Image
            src="/GOtoButton.svg"
            alt="gotoButton"
            width={300}
            height={300}
            priority
          />
        </button>
      </div>
    </section>
  );
}
