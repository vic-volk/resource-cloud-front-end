import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

export var ModalButton = React.createClass({

    getInitialState() {
        return {
            showModal: false,
            data: {}
        };
    },

    close() {
      this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    handleNameChange: function(event) {
        var data = this.state.data;
        data.name = event.target.value;
        this.setState(data);
    },

    handleUrlChange: function(event) {
        var data = this.state.data;
        data.url = event.target.value;
        this.setState(data);
    },

    handleLabelChange: function(event) {
        var data = this.state.data;
        data.label = event.target.value;
        this.setState(data);
    },

    handleDescriptionChange: function(event) {
        var data = this.state.data;
        data.description = event.target.value;
        this.setState(data);
    },

    getValidationState: function() {

    },

    postResource: function() {
        var data = this.state.data;
        $.ajax({
            type: "POST",
            url: this.props.serverUrl,
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json",
            success: function() {
                alert('success!');
            }
        })
    },

    render() {
        return (
            <div>

                <Button
                    bsStyle="primary"
                    onClick={this.open}
                    >
                  Добавить ресурс
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add resource</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                                >
                                <ControlLabel>Resource name</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter name"
                                    onChange={this.handleNameChange}
                                    />
                                <FormControl.Feedback />
                                <ControlLabel>Resource link</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter link"
                                    onChange={this.handleUrlChange}
                                    />
                                <FormControl.Feedback />
                                <ControlLabel>Resource labels</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter labels"
                                    onChange={this.handleLabelChange}
                                    />
                                <FormControl.Feedback />
                                <ControlLabel>Resource description</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter description"
                                    onChange={this.handleDescriptionChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.close}>Close</Button>
                      <Button bsStyle="primary" onClick={this.postResource}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});