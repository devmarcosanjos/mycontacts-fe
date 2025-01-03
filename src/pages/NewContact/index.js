import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/input";
import Select from "../../components/select";

export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo contato" />
            <Input type="text" placeholder="Nome" />
            <Select>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
            </Select>
        </>
    );
}
