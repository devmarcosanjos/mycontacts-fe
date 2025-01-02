import { Container, InputSerarchContainer } from "./styles";

import logo from "../../assets/imagens/logo.svg";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="MyContacts" width="201" />

            <InputSerarchContainer>
                <input type="text" placeholder="Pesquisa pelo nome..." />
            </InputSerarchContainer>
        </Container>
    );
}
