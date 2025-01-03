import React from "react";
import {
    Card,
    Container,
    Header,
    ListContainer,
    InputSerarchContainer,
} from "./styles";

import arrow from "../../assets/icons/arrow.svg";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../../components/Modal";

export default function ContactsList() {
    return (
        <Container>
            <Modal />

            <InputSerarchContainer>
                <input type="text" placeholder="Pesquisa pelo nome..." />
            </InputSerarchContainer>
            <Header>
                <strong>3 contados</strong>
                <Link to="/new">Novo contato</Link>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Marcos Anjos</strong>
                            <small>instagram</small>
                        </div>
                        <span>marcos@gmail.com</span>
                        <span>(45)99999-9999</span>
                    </div>
                    <div className="actions">
                        <Link to="/edit/123">
                            <img src={edit} alt="arrow" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
