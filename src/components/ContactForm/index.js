import React, { useState } from "react";
import { ButtonContainer, Form } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";

export default function ContactForm({ buttonLabel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [erros, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        console.log({ name, email, phone, category });
    }

    function handleNameChange(event) {
        setName(event.target.value);

        if (!event.target.value) {
            setErrors((prevState) => [
                ...prevState,
                { filed: "name", message: "Nome é obrigatório" },
            ]);
        } else {
            setErrors((prevState) =>
                prevState.filter((error) => error.filed !== "name")
            );
        }
    }

    console.log(erros);

    function handleEmailChange(event) {
        setEmail(event.target.value);

        if (event.target.value && !isEmailValid(event.target.value)) {
            const errorAlreadyExists = erros.find(
                (error) => error.filed === "email"
            );

            if (errorAlreadyExists) return;

            setErrors((prevState) => [
                ...prevState,
                { filed: "email", message: "Email é obrigatório" },
            ]);
        } else {
            setErrors((prevState) =>
                prevState.filter((error) => error.filed !== "email")
            );
        }
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                    value={name}
                    placeholder="Nome"
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
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
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
