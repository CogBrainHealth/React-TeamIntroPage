import Image from "next/image";
import styles from "./TeamMember.module.css";
export default function TeamMember() {
  const memberImages = [
    "/images/Member1.svg",
    "/images/Member2.svg",
    "/images/Member3.svg",
    "/images/Member4.svg",
    "/images/Member5.svg",
    "/images/Member6.svg",
    "/images/Member7.svg",
    "/images/Member8.svg",
  ];

  const memberImageWidth = 300;
  const memberImageHeight = 300;

  return (
    <section className={styles.members}>
      <div className={styles.memberImageContainer}>
        {memberImages.slice(0, 4).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Member ${index + 1}`}
            width={memberImageWidth}
            height={memberImageHeight}
            priority={index < 2}
          />
        ))}
      </div>
      <div className={styles.memberImageContainer}>
        {memberImages.slice(4, 8).map((src, index) => (
          <Image
            key={index + 4}
            src={src}
            alt={`Member ${index + 5}`}
            width={memberImageWidth}
            height={memberImageHeight}
            priority={false}
          />
        ))}
      </div>
    </section>
  );
}
