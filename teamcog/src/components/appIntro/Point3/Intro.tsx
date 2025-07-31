import styles from "./intro.module.css";
export default function Intro() {
  return (
    <section className={styles.back}>
      <div className={styles.textContainer}>
        <h1 className={styles.headerIndex}>Point3</h1>
        <p className={styles.headerTitle}>
          나에게 딱 맞는,
          <br />
          종합 뇌 건강 리포트
        </p>
        <p className={styles.headerSubtitle}>
          검사와 게임 결과를 바탕으로, 당신만을 위한 가이드를 만들어드립니다.
        </p>
        <p className={styles.headerAddSubtitle}>
          <br />
          <br />
          -
          <br />
          뇌영양제, 식단, 운동까지 지금 나에게 필요한 것만 담았습니다. 무엇부터
          시작할지 몰라도
          <br /> 괜찮아요. 내게 맞는 영양제까지, Cog콕이 함께 고민합니다.
          <br />
        </p>
        <p className={styles.headerengSubtitle}>
          <br />
          Supplements, diet, and exercise—only what you need right now. Not sure
          <br />
          where to start? CogKok will guide you.
        </p>
      </div>
    </section>
  );
}
