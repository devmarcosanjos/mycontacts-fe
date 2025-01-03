import styled from "styled-components";

export default styled.button`
    height: 52px;
    border: none;
    background: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    border-radius: 4px;
    color: #fff;
    transition: background all 0.2s ease-in;
    padding: 0 16px;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &[disabled] {
        background: #ccc;
        cursor: default;
    }
`;