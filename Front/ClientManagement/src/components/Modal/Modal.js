import './Modal.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
      clientCardList: undefined,
      loading: false
    }
  }

  render() {

    return (
      <div className="modal-container">
        <h2>Dados pessoais</h2>
        <div className="text-field-container">
          <TextField className="text-field" label="Nome" />
          <TextField className="text-field" label="Cpf" />
          <TextField className="text-field" label="Data de nascimento" />
          <TextField className="text-field" label="Nome da mãe" />
        </div>
        <h2>Contato</h2>
        <div className="text-field-container">
          <TextField className="text-field" label="Telefone" />
        </div>
        <h2>Endereço</h2>
        <div className="text-field-container">
          <TextField className="text-field" label="Telefone" />
        </div>
      </div>
    );
  }
}