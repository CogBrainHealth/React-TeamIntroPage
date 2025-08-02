import styles from "./description.module.css";
import Image from "next/image";

export default function Desctription() {
  return (
    <section className={styles.back}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          -<br />
          건강기능식품, 아무거나 고르기엔 너무 많고 불안하죠.
          <br />
          Cog콕은 복용 중인 약물과 건강 상태를 고려해
          <br />뇌 건강에 도움을 줄 수 있는 조합을 추천합니다.
        </p>
        <p className={styles.addDescription}>
          앞으로는 게임 리워드와 연계된 건강기능식품 혜택도 제공할 예정이에요.
        </p>
        <p className={styles.warning}>
          ※ 건강기능식품은 질병 치료제가 아니며, 전문가 상담이 필요할 수
          있습니다.
        </p>
      </div>
    </section>
  );
}
