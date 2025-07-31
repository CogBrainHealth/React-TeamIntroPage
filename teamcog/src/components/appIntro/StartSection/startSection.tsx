import styles from "./startSection.module.css";
import Image from "next/image";

export default function StartAppSection() {
  return (
    <section className={styles.back}>
      <div className={styles.textBox}>
        <p className={styles.subTitle}>About Cog콕</p>
        <h1 className={styles.mainTitle}>
          기억이 흐려지기 전에,뇌 건강은 <strong>Cog콕부터.</strong>
        </h1>
        <p className={styles.highlight}>
          -<br />
          하루 5분, 게임처럼. <br />뇌 건강 관리를 쉽게 이뤄가는 루틴, Cog콕에서
          시작하세요!
        </p>
        <p className={styles.description}>
          기억이 흐려지고, 단어가 잘 떠오르지 않을 때, 예전 같지 않은 내가
          걱정될 때. 병원은 아직 이른 것 같고,
          <br />
          혼자서 뭘 해야 할지도 막막하죠. Cog콕은 그런 순간을 위한 앱입니다.{" "}
          <br />
          <br />
          간단한 검사로 내 인지 상태를 점검하고, 게임처럼 훈련하며 매일 조금씩
          생활습관을 바꿔나갑니다. <br />
          뇌영양제, 식단, 운동까지 당신에게 꼭 맞는 가이드를 제공합니다.
        </p>
        <p className={styles.notice}>
          ※ Cog콕은 의료기기 또는 진단 도구가 아니며, 정보제공 목적입니다.
          정확한 판단이 필요할 경우 의료 전문가의 상담을 권장드립니다.
        </p>
      </div>

      <div className={styles.imageBox}>
        <Image
          src="/CogBrainImage.svg"
          alt="Cog Character"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
}
