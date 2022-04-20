import React from "react";

const bookTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category.name}</td>
            <td scope={"col"}>{props.term.author.name}</td>
            <td scope={"col"}>{props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
        </tr>

    )
}
export default bookTerm;