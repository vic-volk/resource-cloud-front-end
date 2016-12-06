import React from 'react';
import $ from "jquery";

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

export var BookList = React.createClass({

    getInitialState: function() {
        return { data: [] };
    },

    componentDidMount: function() {
        console.log(this.props.serverUrl);
        this.initData();
    },

    componentWillReceiveProps: function(nextProps) {
        console.log("componentWillReceiveProps");
        this.setState({data: nextProps.bookData});
    },

    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate");
        return true;
    },

    initData: function() {
        if(this.props.bookData == null || this.props.bookData.length == 0) {
            $.get(this.props.serverUrl, function(result) {
                this.setState({data: result.content});
            }.bind(this));
        } else {
            this.setState({data: this.props.bookData});
        }
    },

    renderBookEntry(name, description, url) {
        return <ListGroupItem href="#link1">
            <Grid>
                <Row>
                    <Col xs={6} md={2}>
                        <Image src={url} rounded width="100" height="150"/>
                    </Col>
                    <Col xs={6} md={2}>
                        <h2>{name}</h2>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{description}</p>
                    </Col>
                </Row>
            </Grid>
        </ListGroupItem>
    },

    render: function() {
        console.log("bookList: entry");
        var data = this.state.data;
        var rows = [];
        for (var i = 0; i < data.length; i++) {
            rows.push(this.renderBookEntry(data[i].name, data[i].description, data[i].cover));
        }
        return <ListGroup>{rows}</ListGroup>
    }
});