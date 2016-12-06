import React from 'react';
import ReactDOM from 'react-dom';
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
            <ChatWindow serverUrl={this.props.serverUrl}/>
          </Overlay>
        </div>
    );
  }
});