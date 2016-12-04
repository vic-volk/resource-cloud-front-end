import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import { ButtonPanel } from './buttonPanel.jsx';
import { ResourceTable } from './resourceTable.jsx';
import { BookList } from './bookList.jsx';

var rowStyle = {
	marginTop:'20px'
};

var serverUrl = "http://localhost:9998/book";

class Content extends React.Component {
  render() {
    return <Grid>
  			<Row>
      			<Col xs={8} md={8}>
					<InputGroup>
						<InputGroup.Addon>Поиск</InputGroup.Addon>
						<FormControl type="text" />
					</InputGroup>
	  			</Col>
	  		</Row>
			<Row></Row>
		    <Row style={rowStyle}>
				<BookList serverUrl="http://localhost:9998/book"/>
			</Row>
	  	   </Grid>;
  }
}
        
ReactDOM.render(<Content/>, document.getElementById('content'));


