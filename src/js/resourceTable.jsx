import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import Table from 'react-bootstrap/lib/Table';

var TableRow = React.createClass({
    render: function() {
        return <tr>
            <td>{this.props.name}</td>
            <td>{this.props.url}</td>
            <td>{this.props.description}</td>
            <td>{this.props.label}</td>
        </tr>
    }
});

var TableBody = React.createClass({

    getInitialState: function() {
        return { data: [] };
    },

    wrapRow: function (rowContent) {
        return <tr>{rowContent}</tr>
    },

    wrapCell: function(cellText) {
        return <td>{cellText}</td>
    },

    mapModelToJSX: function() {
        return <tr></tr>;
    },

    componentDidMount: function() {
        $.get(this.props.serverUrl, function(result) {
            this.setState({data: result.content});
        }.bind(this));
    },

    render: function() {
        var model = this.state.data;
        var rows = model.length == 0 ? <tr></tr> : [];
        for (var i = 0; i < model.length; i++) {
            rows.push(<TableRow
                key={i}
                name={model[i].name}
                url={model[i].link}
                label={model[i].label}
                description={model[i].description}/>);
        }
        return <tbody>{rows}</tbody>
    }
});

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
            <TableBody serverUrl={"http://localhost:8080/resource"}></TableBody>
        </Table>
    }
});