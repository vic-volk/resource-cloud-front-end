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
    render() {
        return (
            <div
                style={{
                  position: 'absolute',
                  width: '200%',
                  right: '-220%',
                  top: 100,
                  backgroundColor: '#fff',
                  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                  border: '1px solid #CCC',
                  borderRadius: 3,
                  padding: 10,
                  margin: 5,
                  zIndex: 5
        }}
            >
                <div style={{
                                border: '1px solid rgb(18, 185, 54);',
                                backgroundImage: '-webkit-linear-gradient(top, rgb(46, 142, 71) 0px, rgb(5, 93, 15) 100%);',
                                padding: 5
                            }}>Chat window
                </div>
                <div style={{
                                border: '1px solid #CCC',
                                height: 200
                            }}>
                    Text window
                </div>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Input Box</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea"/>
                </FormGroup>
            </div>
        );
    }
});