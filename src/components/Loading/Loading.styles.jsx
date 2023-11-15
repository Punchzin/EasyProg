import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #0C1218;
`;

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    p {
        color: #FFF;
        font-family: "Space Grotesk", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: -2.16px;
    }
`;