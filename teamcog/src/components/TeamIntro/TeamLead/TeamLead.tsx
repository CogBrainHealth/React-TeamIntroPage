import Image from "next/image";
import styles from "./TeamLead.module.css";

export default function TeamLead() {
  return (
    <section className={styles.lead}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/TeamNameText.svg"
          alt="팀명"
          width={300}
          height={300}
          priority
        />
        <Image
          src="/images/TeamLead.png"
          alt="Team Leader"
          width={220}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
