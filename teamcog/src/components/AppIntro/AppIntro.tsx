import Image from "next/image";
import styles from "./AppIntro.module.css";

export default function AppIntro() {
  return (
    <section className={styles.hero}>
      <div className="text-center">
        <Image
          src="/images/CogLogo.svg"
          alt="Cog 앱 로고"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
