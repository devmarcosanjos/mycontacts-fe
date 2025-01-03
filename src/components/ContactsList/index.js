import { Card, Container, Header, ListContainer } from "./styles";

import arrow from "../../assets/icons/arrow.svg";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash.svg";

export default function ContactsList() {
    return (
        <Container>
            <Header>
                <strong>3 contados</strong>
                <a href="/">Novo contato</a>
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
                        <a href="/">
                            <img src={edit} alt="arrow" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>

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
                        <a href="/">
                            <img src={edit} alt="arrow" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>

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
                        <a href="/">
                            <img src={edit} alt="arrow" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
