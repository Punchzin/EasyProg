import { styled } from "styled-components";

const PRESETS = {
  python: {
    gradient: "linear-gradient(-45deg, #312905, #042e52)",
    languageColor: "#0BF0D5",
    languageBackgroundColor: "#0F545B",
  },
  csharp: {
    gradient: "linear-gradient(-45deg, #240422, #440A53)",
    languageColor: "#9B4F96",
    languageBackgroundColor: "rgba(155, 79, 150, 0.20)",
  },
  java: {
    gradient: "linear-gradient(-45deg, #290203, #ED272C)",
    languageColor: "	#290203",
    languageBackgroundColor: "#C5696B",
  },
  javascript: {
    gradient: "linear-gradient(-45deg, #312905, #596036)",
    languageColor: "	#000000",
    languageBackgroundColor: "#B8AB3D",
  },
  
};

export const Choose = styled.div`
  width: 280px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
`;

export const ChooseItem = styled.button`
  position: relative;
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 160px;
  align-items: flex-end;
  overflow: hidden;
  flex-shrink: 0;

  background-image: ${(props) => props.preset in PRESETS ? PRESETS[props.preset].gradient : "black"};
  opacity: 0.2px;
  border-radius: 4px;
  border: 1px solid rgba(50, 59, 69, 0.8);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  img {
    position: absolute;
    bottom: 0rem;
    right: -3rem;
    pointer-events: none;
  }

  > div p {
    background: ${(props) =>
      props.preset in PRESETS
        ? PRESETS[props.preset].languageBackgroundColor
        : "black"};
    color: ${(props) =>
      props.preset in PRESETS ? PRESETS[props.preset].languageColor : "black"};
  }
`;

export const Status = styled.div`
  display: flex;
  position: absolute;
  pointer-events: none;

  bottom: 1.2rem;
  right: 1.5rem;

  color: ${(props) =>
    props.preset in PRESETS ? PRESETS[props.preset].languageColor : "black"};

  i {
    font-size: 1.3rem;
  }
`;

export const ChooseBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Lang = styled.p`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 5px;
  left: 0;
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
