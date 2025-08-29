import styled from "styled-components";

export const PhoneFrame = styled.div`
  position: relative;
  width: 320px;
  height: 640px;
  background-color: transparent;

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
  height: 98%;
  bottom: 1%;
  overflow: hidden;
  clip-path: inset(0 round 50px); // 네 모서리를 둥글게 잘라냄
  z-index: 1;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%; // ✅ Frame 높이에 딱 맞게 채우기
  object-fit: cover; // contain → cover 로 바꾸면 화면 꽉 채움
`;
