import { Container, Header, ListContainer } from "./styles";

import arrow from "../../assets/icons/arrow.svg";

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
            </ListContainer>
        </Container>
    );
}
