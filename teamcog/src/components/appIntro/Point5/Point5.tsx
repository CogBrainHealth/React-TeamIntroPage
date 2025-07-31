"use client"; // Add this line at the very top

import styles from "./global.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Point5() {
  const handleImageClick = () => {
    alert("준비중인 서비스입니다");
  };

  return (
    <section className={styles.back}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headerIndex}>point5</h1>
        <p className={styles.headerTitle}>기관과 가족도 함께</p>
        <p className={styles.headerSubtitle}>
          혼자만 보는 리포트가 아닙니다. 복지기관에서는 검사 전후 리포트를 통해
          인지 변화 과정을
          <br /> 추적할 수 있고, 보호자와 공유해 함께 관리할 수 있어요. 믿을 수
          있는 관리가 필요할 때,
          <br /> Cog콕이 기관과 가족의 연결고리가 됩니다.
        </p>
      </div>

      <p className={styles.info}>
        업체명: Cog콕 | 사업자 등록번호: 811-07-03221
        <br /> 대표 : 최효진 | 주소 : 서울특별시 동작구 양녕로29길 17,
        104호(상도동, BIGTREE)
        <br />
        T: 010-2931-7692 Email: cogbrainhealth@gmail.com
        <br />
        서비스이용약관 &nbsp;
        <Link href="/privacy" legacyBehavior>
          <a target="_blank">개인정보처리방침</a>
        </Link>
      </p>

      {/* ✅ 클릭 이벤트는 div에 적용 */}
      <div className={styles.downLoadImage} onClick={handleImageClick}>
        <Image
          src="/appImages/Point5DownloadImg.svg"
          alt="download"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
