import styles from "./description.module.css";
import Image from "next/image";

export default function Point2Description() {
  return (
    <section className={styles.back}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.graphImg}
          src="/appImages/Point2Graph.svg"
          alt="graph"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <Image
          className={styles.games}
          src="/appImages/Point2Games.png"
          alt="games"
          width={700}
          height={450}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
