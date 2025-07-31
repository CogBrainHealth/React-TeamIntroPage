import styles from "./function3.module.css";
import Image from "next/image";
export default function Function3() {
  return (
    <section className={styles.back}>
      <p className={styles.title}>*식단 추천</p>
      <p className={styles.subtitle}>
        프리미엄 검사 기반으로
        <br />
        추천하는 식단 조합
      </p>
      <p className={styles.description}>
        프리미엄 검사 결과를 토대로, <br />
        나의 상태에 꼭 맞는 맞춤형 식단 조합을 추천합니다.
      </p>
      <Image
        className={styles.image}
        src="/appImages/Point3function3.svg"
        alt="function1"
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
