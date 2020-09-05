import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./elements/Button";
import H1 from "./elements/H1";
import P from "./elements/P";
import "./App.css";

const theme = {
    primary: "teal",
    secondary: "green",
};

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
