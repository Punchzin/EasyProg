import { styled } from "styled-components";

export const HeadLineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    color: #FFF;
    font-family: Space Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  h4 {
    color: #B3CAE0;
    font-family: Space Grotesk;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const Robot = styled.div`
  transform: scale(0.8);
`;