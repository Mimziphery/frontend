import React from "react";
import BookTerm from "../BookTerm/bookTerm";

const books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}> </th>
                            <th scope={"col"}>Available Copies</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BookTerm term={term}/>
                            );
                        } )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default books;