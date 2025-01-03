import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";
import Header from "../Header";
import ContactsList from "../ContactsList";
import Routes from "../../routes";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={defaultTheme}>
                    <GlobalStyles />
                    <Container>
                        <Header />
                        <Routes />
                        <ContactsList />
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
