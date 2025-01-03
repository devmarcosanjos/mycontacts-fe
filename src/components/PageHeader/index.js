import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default function PageHeader({ title }) {
    return (
        <Container>
            <Link to="/" alt="Back">
                <img src={arrow} alt="" />
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
