import styled, { css } from "styled-components";

export default styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    /* background: ${(props) => (props.primary ? "red" : "green")}; */
    background: ${(props) => props.theme.primary};
    color: #0ff;
    &:hover {
        background: blue;
    }
`;
