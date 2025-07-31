import styles from "./description.module.css";
import Image from "next/image";
export default function Point1Description() {
  return (
    <section className={styles.back}>
      <Image
        className={styles.image}
        src="/appimages/Point1PhoneImg.svg"
        alt="MMSE검사 "
        width={600}
        height={600}
        priority
      />
      <p className={styles.korDescription}>
        - <br />
        Cog콕은 MMSE 기반 자체 검사지와 게임 데이터를 바탕으로, 기억력, 언어,
        주의력, <br />
        공간 지각 능력까지 지금 내 인지 상태를 정확하게 확인할 수 있도록
        도와줍니다. <br />
      </p>
      <p className={styles.korAddedDescription}>
        ※ 이 검사는 의료 진단이 아닌, 자기 건강 관리를 위한 참고용입니다.
      </p>
      <p className={styles.engDescription}>
        Cog콕 uses MMSE-based tests and game data to check your memory,
        <br /> language, attention, and spatial skills. <br />
      </p>
      <p className={styles.engAddedDescription}>
        ※ For personal health tracking only, not a medical diagnosis.
      </p>
    </section>
  );
}
