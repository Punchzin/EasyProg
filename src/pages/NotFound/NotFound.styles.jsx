import styled from "styled-components";
import BACKGROUND_PRESET from "../../assets/images/background-preset1.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  background-image: url(${BACKGROUND_PRESET});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-color: #0c1218;
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    color: #fff;
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }

  span {
    width: 1px;
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  p {
    color: #717f8d;
    font-family: "Space Grotesk", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const NotFoundLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: #717f8d;
    font-family: "Space Grotesk", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    transition: all 0.3s;

    &:hover {
      color: #0bf0d5;
    }
  }

  span {
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 32px;
  }
`;
