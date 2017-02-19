import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import $ from "jquery";

const chatWindowStyle = {
    position: 'absolute',
    width: '200%',
    right: '2%',
    top: 100,
    backgroundColor: '#fff',
    boxShadow: '0 15px 10px 10px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgb(0, 0, 0)',
    borderRadius: 3,
    padding: 10,
    margin: 5,
    zIndex: 5
};

const chatWindowHeaderStyle = {
    backgroundImage: '-webkit-linear-gradient(top,rgba(10,31,46,1) 0,rgba(9,93,149,1) 100%)',
    color: 'white',
    textAlign: 'center',
    padding: 1
};

const chatWindowTextBoxStyle = {
    border: '1px solid #ccc',
    height: 200
};

const chatWindowMessageStyle = {
    color: '#000',
    paddingLeft: '5px',
    fontSize: 16
};

export const ChatWindow = React.createClass({

    getInitialState: function () {
        return {message: ""};
    },

    componentDidMount: function () {
        console.log("componentDidMount");
        this.setState({serverUrl: this.props.serverUrl});
    },

    enterMessageToWindow (event) {
        if (event.keyCode == 13) {
            console.log("entered");
            console.log(event);
            //вывести в текстбокс
            var message = this.addTimeBoxToMessage(event.target.value);
            this.showMessage(message);
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

    addTimeBoxToMessage(message) {
        return '[' + new Date().toLocaleString() + ']: ' + message;
    },

    render() {
        return (
            <div style={chatWindowStyle}>
                <div style={chatWindowHeaderStyle}>
                    <h4>Окно сообщений</h4>
                </div>
                <div style={chatWindowTextBoxStyle}>
                    <h4 style={chatWindowMessageStyle}>
                        {this.state.message}
                    </h4>
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