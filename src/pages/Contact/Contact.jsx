import React from "react";
import FilterTable from "../../components/Table/FilterTable";
import { FilterContainer } from "../../components/Table/FilterTableStyle";
import Select from "../../components/Select/Select";
import {
    MainContainer,
    OptionsContainer,
    ButtonsContainer,
    ReviewsContainer,
    Archived,
    ButtonArchived,
    Comment,
} from "./ContactStyle";
import Message from "../../components/Dashboard/Message";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";

function Contact() {
    const messages = require("../../data/dashboard/messages.json");
    const data = useSelector((state) => state.contacts.contacts);
    const isLoading = useSelector((state) => state.contacts.isLoading);

    const tableFilters = [{ name: "All Contacts" }, { name: "Archived" }];

    const cols = [
        { property: "id", label: "Id" },
        {
            property: "date",
            label: "Date",
            display: (row) => <p>{new Date().toLocaleString()}</p>,
        },
        {
            property: "custome",
            label: "Customer",
            display: (row) => <p>{row.customer.name}</p>,
        },
        {
            property: "email",
            label: "Email",
            display: (row) => <p>{row.customer.email}</p>,
        },
        {
            property: "number",
            label: "Number",
            display: (row) => <p>{row.customer.phone}</p>,
        },
        { property: "subject", label: "Subject" },
        {
            property: "comment",
            label: "Comment",
            display: (row) => <Comment>{row.comment}</Comment>,
        },
        {
            property: "status",
            label: "Action",
            display: (row) =>
                row.status ? (
                    <Archived>
                        <p>Archive</p>
                        <p>*Already archived*</p>
                    </Archived>
                ) : (
                    <ButtonArchived>Archive</ButtonArchived>
                ),
        },
    ];

    if (isLoading) {
        return <MainContainer></MainContainer>;
    }

    return (
        <MainContainer>
            <ReviewsContainer>
                {messages.map((message, i) => {
                    return <Message props={message} key={i} />;
                })}
            </ReviewsContainer>
            <OptionsContainer>
                <FilterContainer>
                    <FilterTable filters={tableFilters} />
                </FilterContainer>
                <ButtonsContainer>
                    <Select />
                </ButtonsContainer>
            </OptionsContainer>
            <Table data={data} cols={cols} />
        </MainContainer>
    );
}

export default Contact;
