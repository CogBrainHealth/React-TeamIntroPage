import styles from "./function2.module.css";
import Image from "next/image";
export default function Function2() {
  return (
    <section className={styles.back}>
      <p className={styles.title}>*운동 추천</p>
      <p className={styles.subtitle}>
        프리미엄 검사 기반으로
        <br />
        추천하는 운동 루틴
      </p>
      <p className={styles.description}>
        프리미엄 검사 결과를 바탕으로, <br />
        나의 필요에 맞춘 개인 맞춤형 운동 루틴을 추천합니다.
      </p>
      <Image
        className={styles.image}
        src="/appImages/Point3Function2.svg"
        alt="function1"
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
