import React, { useRef, useState } from "react";
import { ButtonContainer, Form } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import PropTypes from "prop-types";

export default function ContactForm({ buttonLabel }) {
    const [name, setName] = useState("");
    const emailInput = useRef(null);

    return (
        <Form>
            <FormGroup>
                <Input
                    value={name}
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="E-mail"
                    type="email"
                    ref={emailInput}
                    defaultValue="marcos@gmail.com"
                />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" type="number" />
            </FormGroup>

            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
