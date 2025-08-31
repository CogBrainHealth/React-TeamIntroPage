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

  @media (max-width: 768px) {
    width: 60%;
    hight: 60%;
    max-width: 320px;
  }
`;

export const Screen = styled.div`
  position: absolute;
  left: 5.5%;
  width: 89%;
  height: 98%;
  bottom: 1%;
  overflow: hidden;
  clip-path: inset(0 round 50px);
  z-index: 1;

  @media (max-width: 768px) {
    left: 5.5%;
    width: (89 * 0.6) %;
    height: (98 * 0.6) %;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
