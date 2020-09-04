import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";

const H1 = styled.h1`
    color: aqua;
`;

const theme = {
    primary: "teal",
    secondary: "green",
};

const Button = styled.button`
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

const P = styled.p`
    color: brown;
    font-size: 22px;
    border: 5px dashed red;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 200px;
    padding: 10px 20px;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <H1>Styled Components</H1>
                <P>This is my first styling element in REACTJS</P>
                <form>
                    <input type="text" />
                    <button>Create</button>
                    <Button primary={false}>Create</Button>
                </form>
            </div>
        </ThemeProvider>
    );
}
export default App;
