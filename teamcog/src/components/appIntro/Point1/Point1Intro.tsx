import styles from "./Point1.module.css";
export default function Point1Intro() {
  return (
    <section className={styles.back}>
      <div className={styles.textContainer}>
        <h1 className={styles.headerIndex}>Point1</h1>
        <p className={styles.headerTitle}>
          나의 뇌 건강,
          <br />
          지금 확인해보세요
        </p>
        <p className={styles.headerSubtitle}>
          요즘 기억이 잘 안 나고, 말이 막히는 순간이 있으신가요?
        </p>
      </div>
    </section>
  );
}
