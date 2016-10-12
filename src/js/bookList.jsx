import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

export var BookList = React.createClass({
    render: function() {
        return <ListGroup>
            <ListGroupItem href="#link1">
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="/assets/thumbnail.png" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <h2>Test Book 1</h2>
                        </Col>
                        <Col xs={6} md={4}>
                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
            <ListGroupItem href="#link2">
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="/assets/thumbnail.png" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <h2>Test Book 2</h2>
                        </Col>
                        <Col xs={6} md={4}>
                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
            <ListGroupItem>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="/assets/thumbnail.png" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <h2>Test Book 3</h2>
                        </Col>
                        <Col xs={6} md={4}>
                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        </ListGroup>
    }
});