import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import Overlay from 'react-bootstrap/lib/Overlay';

import { ChatWindow } from './chatWindow.jsx';

export const ChatWithAgentButton = React.createClass({
  getInitialState() {
    return { show: false };
  },

  toggle() {
    this.setState({ show: !this.state.show });
  },

  render() {
    return (
        <div>
          <Button ref="target" onClick={this.toggle}>
            Chat with Agent
          </Button>

          <Overlay
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement="right"
              container={this}
              target={() => ReactDOM.findDOMNode(this.refs.target)}
          >
            <ChatWindow />
          </Overlay>
        </div>
    );
  }
});