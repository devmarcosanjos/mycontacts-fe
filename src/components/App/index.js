import React from "react";
import Header from "../Header";
import Routes from "../../routes";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import { Container } from "./styles";
function App() {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={defaultTheme}>
                    <GlobalStyles />
                    <Container>
                        <Header />
                        <Routes />
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
