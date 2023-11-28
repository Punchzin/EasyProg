import styled from "styled-components";
import LANDING_BACKGROUND from "../../assets/images/landingpage-background.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-image: url(${LANDING_BACKGROUND});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const HeaderSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: #fff;
    font-family: "Space Grotesk", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }

  img {
    pointer-events: none;
  }
`;

export const CTAVersion = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 72px;
  border: 1px solid #e2db2a;
  background: rgba(226, 219, 42, 0.2);

  color: #e2db2a;
  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 14px */
`;

export const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 72px;
    height: 92px;
    pointer-events: none;
    animation: ping 3.2s ease infinite;
  }

  @keyframes ping {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  h1 {
    color: #fff;
    font-family: "Space Grotesk", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -2.16px;
  }

  p {
    color: #717f8d;
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.96px;
    max-width: 490px;
    text-align: center;

    strong {
      color: #717f8d;
    }
  }
`;

export const Preview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  img {
    width: 100%;
    pointer-events: none;
    box-shadow: 0px 19px 81.3px 0px rgba(11, 240, 213, 0.05);
  }
`;
