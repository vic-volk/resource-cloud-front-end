import React from 'react';
import ReactDOM from 'react-dom';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

import { ModalButton } from './modalButton.jsx';

export class ButtonPanel extends React.Component {
  render() {
    return (
      <ButtonToolbar>
    	<ModalButton>Добавить ресурс</ModalButton>
    	<Button bsStyle="warning">Удалить ресурс</Button>
      </ButtonToolbar>
    );
  }
}