import styled, { keyframes } from "styled-components";

export const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(246, 245, 252, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top: 4px solid ${({ theme }) => theme.colors.primary.main};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: ${spinner} 1s linear infinite;
    }
`;
