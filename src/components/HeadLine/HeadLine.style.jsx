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