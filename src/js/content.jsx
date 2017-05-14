import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import { ChatWithAgentButton } from './chatWithAgentButton.jsx';
import {BookSearch} from './bookSearch.jsx';

import $ from "jquery";

var rowStyle = {
    marginTop: '20px'
};

var serverUrl = "http://localhost:9998";

var state = [
    'Личный кабинет',
    'Список пользователей',
    'Список сообщений',
    'Объявления',
    'Поиск по электронной библиотеке виртуальной кафедры',
    'Завершить сессию'
];

class Content extends React.Component{

    constructor(props) {
        super(props);
        console.log('componentDidMount');
        this.state = state[4];
    }

    handleUserAccount() {
        console.log('handleUserAccount');
        console.log(this.state);
        this.state = state[0];
        console.log(this.state);
    }

    handleUserList() {
        console.log('handleUserList');
        console.log(this.state);
        this.state = state[1];
        console.log(this.state);
    }

    handleMessageList() {
        console.log('handleMessageList');
        console.log(this.state);
        this.state = state[2];
        console.log(this.state);
    }

    handleNoticeList() {
        console.log('handleNoticeList');
        console.log(this.state);
        this.state = state[3];
        console.log(this.state);
    }

    handleSearch() {
        console.log('handleSearch');
        console.log(this.state);
        this.state = state[4];
        console.log(this.state);
    }

    handleCloseSession() {
        console.log('handleCloseSession');
        console.log(this.state);
        this.state = state[5];
        console.log(this.state);
    }

    ContentRendering(props) {
        if(this.state == state[1]) {
            return <h1>{state[1]}</h1>
        }
        return <BookSearch/>;
    }

    render() {
        return <div>
        <div>
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            Поиск по электронной библиотеке виртуальной кафедры
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Меню виртуальной кафедры" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} onClick={this.handleUserAccount}>Личный кабинет</MenuItem>
                            <MenuItem eventKey={3.2} onClick={this.handleUserList}>Список пользователей</MenuItem>
                            <MenuItem eventKey={3.3} onClick={this.handleMessageList}>Список сообщений</MenuItem>
                            <MenuItem eventKey={3.4} onClick={this.handleNoticeList}>Объявления</MenuItem>
                            <MenuItem eventKey={3.5} onClick={this.handleSearch}>
                                Поиск по электронной библиотеке виртуальной кафедры
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.6} onClick={this.handleCloseSession}>Завершить сессию</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">
                            <ChatWithAgentButton serverUrl="http://localhost:9998"/>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
            <BookSearch/>
        </div>
        </div>;
    }
}

ReactDOM.render(<Content/>, document.getElementById('content'));