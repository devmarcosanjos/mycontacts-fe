import React from "react";
import { Container, Footer, Overlay } from "./styles";

import Button from "../Button";

export default function Modal() {
    return (
        <Overlay>
            <Container>
                <h1>Titulo</h1>
                <p>corpo</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button type="button">Deletar</Button>
                </Footer>
            </Container>
        </Overlay>
    );
}
