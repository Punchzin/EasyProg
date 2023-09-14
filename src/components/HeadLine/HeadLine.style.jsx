import { styled } from "styled-components";

export const HeadLineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: #fff;
    font-family: Space Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  h4 {
    color: #b3cae0;
    font-family: Space Grotesk;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const Robot = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ping 2s ease infinite;
  

  img {
    width: 58px;
    height: 74px;
    pointer-events: none;
  }

  @keyframes ping {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
`;
