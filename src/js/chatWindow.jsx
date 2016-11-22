import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export const ChatWindow = React.createClass({

    enterMessageToWindow (event) {
        if (event.keyCode == 13) {
            console.log("entered");
            console.log(event);
            //вывести в текстбокс
            //отправить запрос на сервак
        }
    },

    showMessage() {
        return <p>{this.state.message}</p>;
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
                    <h2>{}</h2>
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