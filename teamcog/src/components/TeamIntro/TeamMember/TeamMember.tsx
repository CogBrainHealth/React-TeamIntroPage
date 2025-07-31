import Image from "next/image";
import styles from "./TeamMember.module.css";
export default function TeamMember() {
  const memberImages = [
    "/images/Member1.png",
    "/images/Member2.png",
    "/images/Member3.png",
    "/images/Member4.png",
    "/images/Member5.png",
    "/images/Member6.png",
    "/images/Member7.png",
    "/images/Member8.png",
  ];

  const memberImageWidth = 220;
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
