import { styled } from "styled-components";

export const Choose = styled.div`
  max-width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChooseItem = styled.button`
  position: relative;
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 160px;
  align-items: flex-end;

  background-image: linear-gradient(-45deg, #312905, #042e52);
  opacity: 0.2px;
  border-radius: 4px;
  border: 1px solid rgba(50, 59, 69, 0.8);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    opacity: 0.8;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
  }
`;

export const ChooseBody = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Lang = styled.p`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  border-radius: 5px;
  background: #0f545b;
  left: 0;

  color: #0BF0D5;
  font-family: Space Grotesk;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChooseLang = styled.h2`
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
