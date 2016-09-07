import React from 'react';
import ReactDOM from 'react-dom';

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
        alert('!');
    }
});