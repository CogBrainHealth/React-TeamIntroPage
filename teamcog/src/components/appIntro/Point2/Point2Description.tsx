import styles from "./description.module.css";
import Image from "next/image";
export default function Point2Description() {
  return (
    <section className={styles.back}>
      <Image
        className={styles.graphImg}
        src="/appImages/Point2Graph.svg"
        alt="graph"
        width={500}
        height={500}
        priority
      />
      <Image
        className={styles.games}
        src="/appImages/Point2Games.png"
        alt="graph"
        width={700}
        height={480}
        priority
      />
    </section>
  );
}
