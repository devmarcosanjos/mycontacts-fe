import React, { useState } from "react";
import { ButtonContainer, Form } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";

import formartPhone from "../../utils/formatPhone";

export default function ContactForm({ buttonLabel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");

    const { getErrorMessageByFieldName, removeError, setError, errors } =
        useErrors();

    const isFormValid = name && errors.length === 0;

    function handleSubmit(event) {
        event.preventDefault();

        console.log({ name, email, phone: phone.replace(/\D/g, ""), category });
    }

    function handleNameChange(event) {
        setName(event.target.value);

        if (!event.target.value) {
            setError({ field: "name", message: "Nome é obrigatório" });
        } else {
            removeError("name");
        }
    }

    function handleEmailChange(event) {
        const emailValue = event.target.value;
        setEmail(emailValue);

        if (!emailValue) {
            setError({ field: "email", message: "Email é obrigatório" });
        } else if (!isEmailValid(emailValue)) {
            setError({ field: "email", message: "Email inválido" });
        } else {
            removeError("email");
        }
    }

    function handlePhoneChange(event) {
        setPhone(formartPhone(event.target.value));
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <FormGroup error={getErrorMessageByFieldName("name")}>
                <Input
                    error={getErrorMessageByFieldName("name")}
                    value={name}
                    placeholder="Nome *"
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName("email")}>
                <Input
                    error={getErrorMessageByFieldName("email")}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="Telefone"
                    type="number"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="15"
                />
            </FormGroup>

            <FormGroup>
                <Select value={category} onChange={handleCategoryChange}>
                    <option value="">Categoria</option>
                    <option value="instagram">Instagram</option>
                    <option value="discord">Discord</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit" disabled={!isFormValid}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
