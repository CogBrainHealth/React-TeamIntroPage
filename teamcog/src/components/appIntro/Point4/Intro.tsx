import styles from "./intro.module.css";
export default function Intro() {
  return (
    <>
      <section className={styles.back}>
        <h1 className={styles.headerIndex}>point4</h1>
        <p className={styles.headerTitle}>
          게임처럼 가볍게,
          <br />뇌 훈련
        </p>
        <p className={styles.headerSubtitle}>
          운동이 몸을 깨우듯, 게임은 뇌를 깨웁니다.
          <br />
          <br />
        </p>
        <p className={styles.headerAddSubtitle}>
          <br />
          <br />
          -
          <br />
          하루 단 5분이면 충분합니다. 가볍게 즐기는 게임과 활동을 통해 뇌를
          자연스럽게 자극해
          <br />
          보세요. 어렵지 않고, 누구나 쉽게 재미있게 참여할 수 있어 부담 없이
          시작할 수 있습니다.
          <br />
        </p>
        <p className={styles.headerengSubtitle}>
          <br />
          Just 5 minutes a day is enough. Light, fun games help naturally
          stimulate
          <br /> your brain—easy to start, enjoyable for everyone.
        </p>
      </section>
    </>
  );
}
