import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import { ChatWithAgentButton } from './chatWithAgentButton.jsx';

export var CustomNavbar = React.createClass({
  render() {
    return <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Поиск по электронной библиотеке виртуальной кафедры</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={3} title="Меню виртуальной кафедры" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Личный кабинет</MenuItem>
          <MenuItem eventKey={3.2}>Список пользователей</MenuItem>
          <MenuItem eventKey={3.3}>Список сообщений</MenuItem>
          <MenuItem eventKey={3.4}>Объявления</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.5}>Завершить сессию</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">
          <ChatWithAgentButton serverUrl="http://localhost:9998"/>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  }
});