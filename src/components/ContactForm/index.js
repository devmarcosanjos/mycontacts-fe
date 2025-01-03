import React from "react";
import { ButtonContainer, Form } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import PropTypes from "prop-types";

export default function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>

            <FormGroup>
                <Input placeholder="E-mail" type="email" />
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
