import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import Books from "../Books/BookList/books";
import Categories from "../Categories/categories";
import Authors from "../Authors/AuthorsList/authors";
import BooksAdd from "../Books/BooksAdd/booksAdd";
import LibraryService from "../../repository/libraryRepository";
import Header from "../Header/header";
import BooksEdit from "../Books/BooksEdit/booksEdit";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (

                <Router>
                    <Header/>
                    <main>
                        <div className="container">

                            <Route path={"/categories"} exact render={() =>
                                <Categories categories={this.state.categories}/>}/>



                            <Route path={"/books/edit/:id"} exact render={() =>
                                <BooksEdit categories={this.state.categories}
                                             authors={this.state.authors}
                                             onEditBook={this.editBook}
                                             book={this.state.selectedBook}/>}/>

                            <Route path={"/books/add"} exact render={() =>
                                <BooksAdd categories={this.state.categories}
                                            authors={this.state.authors}
                                            onAddBook={this.addBook}/>}/>

                            <Route path={"/"} exact render={() =>
                                <Books books={this.state.books}
                                       onDelete={this.deleteBook}
                                       onEdit={this.getBook}
                                       onMark={this.markBook}/>}/>

                            <Route path={"/books"} exact render={() =>
                                <Books books={this.state.books}
                                          onDelete={this.deleteBook}
                                          onEdit={this.getBook}
                                            onMark={this.markBook}/>}/>






                        </div>
                    </main>

                </Router>

        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }



    loadBooks = () =>{
        LibraryService.fetchBooks()
            .then((data)=> {
                this.setState({
                    books: data.data

                })
            });
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }



    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }


    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    markBook = (id) => {
        LibraryService.markBook(id)
            .then(() => {
                this.loadBooks();
            });
    }


}

export default App;
