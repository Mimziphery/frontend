import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Books from "../Books/BookList/books";
import Categories from "../Categories/categories";
import LibraryService from "../../repository/libraryRepository";
import Header from "../Header/header";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: []
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Route path="/books" component={Books} />

                </Router>
            </div>
        );
    }

    loadBooks = () =>{
        LibraryService.fetchBooks()
            .then((data)=> {
                this.setState({
                    books: data.data

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

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
    }

}

export default App;
