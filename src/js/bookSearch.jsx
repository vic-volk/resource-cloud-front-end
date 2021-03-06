import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import {BookList} from './bookList.jsx';
import {CustomNavbar} from './navbar.jsx';

import $ from "jquery";

var rowStyle = {
    marginTop: '20px'
};

var serverUrl = "http://localhost:9998";

export var BookSearch = React.createClass({

    getInitialState() {
        return {data: []};
    },

    requestBooks(term) {
        console.log(term);
        $.get(serverUrl + "/book" + '?q=' + term, function (result) {
            this.setState({data: result.content});
            this.render();
        }.bind(this));
    },

    searchBooks(event) {
        if (event.keyCode == 13) {
            console.log("entered");
            console.log(event);
            //запросить данные
            this.requestBooks(event.target.value);
            //обновить компонент
        }
    },

    render() {
        return <Grid>
                    <Row>
                        <Col xs={8} md={8}>
                            <InputGroup>
                                <InputGroup.Addon>Поиск</InputGroup.Addon>
                                <FormControl onKeyDown={this.searchBooks} type="text"/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row style={rowStyle}>
                        <BookList serverUrl={serverUrl + "/book"} bookData={this.state.data}/>
                    </Row>
                </Grid>;
    }
});