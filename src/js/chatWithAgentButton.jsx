import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Overlay from 'react-bootstrap/lib/Overlay';

import { ChatWindow } from './chatWindow.jsx';

const chatButtonStyle = {
    backgroundColor: '#000',
    backgroundImage: 'linear-gradient(to bottom,#3c3c3c 0,#222 100%)',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    border: '#fff'
};

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
          <Button ref="target" onClick={this.toggle} style={chatButtonStyle}>Открыть окно чата</Button>

          <Overlay
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement="right"
              container={this}
              target={() => ReactDOM.findDOMNode(this.refs.target)}
          >
            <ChatWindow serverUrl={this.props.serverUrl}/>
          </Overlay>
        </div>
    );
  }
});