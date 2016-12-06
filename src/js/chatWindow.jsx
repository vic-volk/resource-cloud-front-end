import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import $ from "jquery";

export const ChatWindow = React.createClass({

    getInitialState: function() {
        return { message: "" };
    },

    componentDidMount: function() {
        console.log("componentDidMount");
        this.setState({serverUrl: this.props.serverUrl});
    },

    enterMessageToWindow (event) {
        if (event.keyCode == 13) {
            console.log("entered");
            console.log(event);
            //вывести в текстбокс
            this.showMessage(event.target.value);
            //отправить запрос на сервак
            this.requestAgent(event.target.value);
        }
    },

    showMessage(message) {
        this.setState({message: message});
    },

    requestAgent(message) {
        $.post(this.props.serverUrl + "/agent" + '?question-text=' + message, function (result) {
            this.setState({data: result.content});
            this.render();
        }.bind(this));
    },

    render() {
        return (
            <div
                style={{
                  position: 'absolute',
                  width: '200%',
                  right: '2%',
                  top: 100,
                  backgroundColor: '#fff',
                  boxShadow: '0 15px 10px 10px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgb(18, 185, 54)',
                  borderRadius: 3,
                  padding: 10,
                  margin: 5,
                  zIndex: 5
        }}
            >
                <div style={{
                                border: '1px solid rgb(18, 185, 54)',
                                backgroundImage: '-webkit-linear-gradient(top,#5cb85c 0,#3c763d 100%)',
                                color: 'white',
                                padding: 5
                            }}><h2>Chat window</h2>
                </div>
                <div style={{
                                border: '1px solid rgb(18, 185, 54)',
                                height: 200
                            }}>
                    <h2>{this.state.message}</h2>
                </div>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel></ControlLabel>
                    <FormControl componentClass="textarea"
                                 placeholder=""
                                 onKeyDown={this.enterMessageToWindow}/>
                </FormGroup>
            </div>
        );
    }
});