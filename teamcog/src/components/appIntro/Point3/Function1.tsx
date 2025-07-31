import styles from "./function1.module.css";
import Image from "next/image";
export default function Function1() {
  return (
    <section className={styles.back}>
      <p className={styles.title}>*뇌영양제 추천</p>
      <p className={styles.subtitle}>
        프리미엄 검사 기반으로
        <br />
        추천하는 영양제 조합
      </p>
      <p className={styles.description}>
        개개인의 상태를 분석해,
        <br />
        프리미엄 검사 결과에 맞춘 최적의 영양 조합을 추천합니다.
      </p>
      <Image
        className={styles.image}
        src="/appImages/Point3Function1.svg"
        alt="function1"
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
