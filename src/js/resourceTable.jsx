import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import Table from 'react-bootstrap/lib/Table';

export var ResourceTable = React.createClass({
    render: function() {
        return <Table className="show-grid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Url</th>
                    <th>Description</th>
                    <th>Label</th>
                </tr>
            </thead>
        </Table>
    },

    componentDidMount: function() {
        $.get("http://localhost:8080/resource", function(result) {
            console.log(JSON.stringify(result));
        });
    }
});