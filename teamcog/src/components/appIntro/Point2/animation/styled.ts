// styled.ts
import styled from "styled-components";

export const PhoneFrame = styled.div`
  position: relative;
  width: 320px; /* 초기 너비 설정 */
  /* height: 640px; */ /* 고정된 높이 제거 */
  aspect-ratio: 320 / 640; /* 원래 너비:높이 비율 (1:2) 유지 */
  background-color: transparent;
  overflow: hidden; /* 내부 요소가 넘치지 않도록 */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/appImages/PhoneFrame.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 2;
    pointer-events: none;
  }
`;

export const Screen = styled.div`
  position: absolute;
  left: 5.5%;
  width: 89%;
  height: 98%; /* PhoneFrame의 새로운 반응형 높이에 따라 98%로 조절됩니다. */
  bottom: 1%;
  overflow: hidden;
  clip-path: inset(0 round 50px);
  z-index: 1;
  @media (max-width: 768px) {
    clip-path: inset(0 round 40px);
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%; /* 부모 요소(div)의 100% 높이를 따르게 됩니다. */
  object-fit: cover;
`;
