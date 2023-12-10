import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #2ae2cd;
  background: rgba(42, 226, 205, 0.2);
  height: 40px;

  color: #0bf0d5;

  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  transition: all 0.3s;

  &:hover {
    background: rgba(42, 226, 205, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;