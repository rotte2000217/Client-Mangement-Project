import './Modal.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Api } from '../../rpc/Api';

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        Id: undefined,
        FullName: '',
        Document: '',
        Birthday: '',
        MotherName: '',
        FatherName: '',
        Emails: [],
        Addresses: [],
        Phones: []
      },
      loading: false
    }
  }

  componentDidMount() {
    const { selectedPersonSummary } = this.props;

    if(!!selectedPersonSummary) {
      this.getClientDetails(selectedPersonSummary?.Id);
    }
  }

  saveClient = () => {
    if(!!this.props.selectedPersonSummary) {
      this.updateClient();
    } else {
      this.createClient();
    }
  }

  async getClientDetails(id) {
    this.setState({...this.state, loading: true});
    const clientDetails = await Api.getClientDetails(id);
    if (!!clientDetails) {
      this.setState({...this.state, info: clientDetails, loading: false});
    } else {
      alert('Não foi possível as informações do cliente.');
      this.setState({...this.state, loading: false});
    }
  }

  async deleteClient() {
    const { selectedPersonSummary, removeFromList, closeModal } = this.props;
    this.setState({...this.state, loading: true});

    const response = await Api.deleteClient(selectedPersonSummary?.Id);
  
    if (!!response) {
      this.setState({...this.state, loading: false});
      removeFromList(selectedPersonSummary?.Id);
      closeModal();
    } else {
      alert('Não foi possível deletar as informações do cliente.');
      this.setState({...this.state, loading: false});
    }
  }

  async createClient() {
    const { info } = this.state;
    this.setState({...this.state, loading: true});
  
    const clientInfo = await Api.createClient(info);
    if (!!clientInfo) {
      this.setState({...this.state, loading: false});
      this.props.addToList(clientInfo);
      this.props.closeModal();
    } else {
      alert('Não foi possível salvar as informações do cliente.');
      this.setState({...this.state, loading: false});
    }
  }

  async updateClient() {
    const { info } = this.state;
    const { updateList, closeModal } = this.props;

    this.setState({...this.state, loading: true});
    const response = await Api.updateClient(info);
    if (!!response) {
      updateList(info);
      closeModal();
    } else {
      alert('Não foi possível salvar as informações do cliente.');
    }
    this.setState({...this.state, loading: false});
  }

  addPhone = () => {
    const { info } = this.state;
    const { Phones } = info;
    console.log(this.state);
    let newPhones = Phones;
    newPhones.push({CountryCode: '', AreaCode: '', Number: '', Type: undefined});
    this.setState({...this.state, info: {...info, Phones: newPhones} });
  }

  addEmail = () => {
    const { info } = this.state;
    const { Emails } = info;

    let newEmails = Emails;
    newEmails.push({EmailAddress: ""});
    this.setState({...this.state, info: {...info, Emails: newEmails} });
  }

  editEmailAddress = (value, index) => {
    const { info } = this.state;
    const { Emails } = info;

    let newEmails = Emails;
    newEmails[index].EmailAddress = value;
    this.setState({...this.state, info: {...info, Emails: newEmails} });
  }

  editPhoneNumber = (value, index) => {
    const { info } = this.state;
    const { Phones } = info;

    let newPhones = Phones;
    newPhones[index].Number = value;
    this.setState({...this.state, info: {...info, Phones: newPhones} });
  }

  editCountryCode = (value, index) => {
    const { info } = this.state;
    const { Phones } = info;

    let newPhones = Phones;
    newPhones[index].CountryCode = value;
    this.setState({...this.state, info: {...info, Phones: newPhones} });
  }

  editAreaCode = (value, index) => {
    const { info } = this.state;
    const { Phones } = info;

    let newPhones = Phones;
    newPhones[index].AreaCode = value;
    this.setState({...this.state, info: {...info, Phones: newPhones} });
  }

  editPhoneType = (value, index) => {
    const { info } = this.state;
    const { Phones } = info;

    let newPhones = Phones;
    newPhones[index].Type = value;
    this.setState({...this.state, info: {...info, Phones: newPhones} });
  }

  addAddress = () => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses.push({Street: '', Neighborhood: '', City: '', StreetNumber: '', ZipCode: ''});
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  editStreet = (value, index) => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses[index].Street = value;
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  editCity = (value, index) => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses[index].City = value;
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  editZipCode = (value, index) => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses[index].ZipCode = value;
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  editAddressNumber = (value, index) => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses[index].StreetNumber = value;
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  editNeighborhood = (value, index) => {
    const { info } = this.state;
    const { Addresses } = info;

    let newAddresses = Addresses;
    newAddresses[index].Neighborhood = value;
    this.setState({...this.state, info: {...info, Addresses: newAddresses} });
  }

  removePhone = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { Phones } = info;

      let newPhones = Phones;
      newPhones.splice(index, 1)
      this.setState({...this.state, info: {...info, Phones: newPhones} });
    }
  }

  removeAddress = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { Addresses } = info;

      let newAddresses = Addresses;
      newAddresses.splice(index, 1)
      this.setState({...this.state, info: {...info, Addresses: newAddresses} });
    }
  }

  removeEmail = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { Emails } = info;

      let newEmails = Emails;
      newEmails.splice(index, 1)
      this.setState({...this.state, info: {...info, Emails: newEmails} });
    }
  }

  editName = (value) => {
    const { info } = this.state;
    this.setState({...this.state, info: {...info, FullName: value} });
  }

  editDocument = (value) => {
    const { info } = this.state;
    this.setState({...this.state, info: {...info, Document: value} });
  }

  editBirthday = (value) => {
    const { info } = this.state;
    this.setState({...this.state, info: {...info, Birthday: value} });
  }

  editMotherName = (value) => {
    const { info } = this.state;
    this.setState({...this.state, info: {...info, MotherName: value} });
  }

  editFatherName = (value) => {
    const { info } = this.state;
    this.setState({...this.state, info: {...info, FatherName: value} });
  }

  render() {
    const { info, loading } = this.state;
    const { Addresses, Emails, Phones } = info;

    if (loading) {
      return (
        <div className="modal-container">
          <div className="center-align">
            <CircularProgress />
          </div>
        </div>
      )
    }

    return (
      <div className="modal-container">
        <div className="save-delete-container">
          <p className="save-delete-text" onClick={() => this.deleteClient()}>Deletar</p>
          <p className="save-delete-text" onClick={() => this.saveClient()}>Salvar</p>
        </div>
        <h2>Dados pessoais</h2>
        <div className="text-field-container">
          <TextField className="text-field" label="Nome" value={this.state.info.FullName} onChange={(e) => this.editName(e.target.value)}/>
          <TextField className="text-field" label="Cpf" value={this.state.info.Document} onChange={(e) => this.editDocument(e.target.value)}/>
          <TextField className="text-field" label="Data de nascimento" value={this.state.info.Birthday} onChange={(e) => this.editBirthday(e.target.value)}/>
          <TextField className="text-field" label="Nome da mãe" value={this.state.info.MotherName} onChange={(e) => this.editMotherName(e.target.value)}/>
          <TextField className="text-field" label="Nome do pai" value={this.state.info.FatherName} onChange={(e) => this.editFatherName(e.target.value)}/>
        </div>

        <div className="label-field-container"><h2>Telefone</h2><AddCircleOutlineIcon className="add-icon" onClick={() => this.addPhone()}/></div>
        <div className="text-field-container">
        {Phones.map((entry, index) => (
          <Card className="additional-field">
            <div>
              <TextField className="text-field-full" label="Código do pais"  value={entry.CountryCode} onChange={(e) => this.editCountryCode(e.target.value, index)}/>
              <TextField className="text-field-full" label="Código de área"  value={entry.AreaCode} onChange={(e) => this.editAreaCode(e.target.value, index)}/>
              <TextField className="text-field-full" label="Número"  value={entry.Number} onChange={(e) => this.editPhoneNumber(e.target.value, index)}/>
              <Select
                className="text-field-full"
                labelId="Tipo"
                value={entry.Type}
                onChange={(e) => this.editPhoneType(e.target.value, index)}
              >
                <MenuItem value={0}>Celular</MenuItem>
                <MenuItem value={1}>Trabalho</MenuItem>
                <MenuItem value={2}>Casa</MenuItem>
                <MenuItem value={3}>Outro</MenuItem>
              </Select>
            </div>
            <ClearIcon className="pointer-icon" onClick={() => this.removePhone()}/>
          </Card>
        ))}
        </div>

        <div className="label-field-container"><h2>Email</h2> <AddCircleOutlineIcon className="add-icon" onClick={() => this.addEmail()}/></div>
        <div className="text-field-container">
        {Emails.map((entry, index) => (
          <Card className="additional-field">
            <TextField className="text-field-full" label="Email" value={entry.EmailAddress} onChange={(e) => this.editEmailAddress(e.target.value, index)}/>
            <ClearIcon className="pointer-icon" onClick={() => this.removeEmail()}/>
          </Card>
        ))}
        </div>

        <div className="label-field-container "> <h2>Endereço</h2> <AddCircleOutlineIcon className="add-icon" onClick={() => this.addAddress()}/></div>
        <div className="text-field-container">
          {Addresses.map((entry, index) => (
            <Card key={"" + index} className="address-container">
              <div className="address-cell-container">
                <TextField className="text-field-full" label="CEP" value={entry.ZipCode} onChange={(e) => this.editZipCode(e.target.value, index)}/>
                <TextField
                  className="text-field-full"
                  label="Rua"
                  value={entry.Street}
                  onChange={(e) => this.editStreet(e.target.value, index)}
                />
                <TextField className="text-field-full" label="Número" value={entry.StreetNumber} onChange={(e) => this.editAddressNumber(e.target.value, index)}/>
                <TextField className="text-field-full" label="Bairro" value={entry.Neighborhood} onChange={(e) => this.editNeighborhood(e.target.value, index)}/>
                <TextField className="text-field-full" label="Cidade" value={entry.City} onChange={(e) => this.editCity(e.target.value, index)}/>
              </div>
              <ClearIcon className="pointer-icon" onClick={() => this.removeAddress(index)}/>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}