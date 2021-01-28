import './Modal.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        addresses: [
          {
            city: "Recife",
            street: "Av manoel borba",
            neighborhood: "Boa Vista",

            //TODO: Adds this configuration in modal
            streetNumber: 22,
            zipCode: 50070000,
          },
        ],
        emails:[{
          emailAddress: "felix_ruan09@hotmail.com"
          }
        ],
        phones:[{
          phoneNumber: "81997056040",

          //TODO: Adds this configuration in modal
          countryCode: "55",
          areaCode: "81",
          phoneType: 1,
        }
      ],
      },
      loading: false
    }
  }

  addPhone = () => {
    const { info } = this.state;
    const { phones } = info;

    let newPhones = phones;
    newPhones.push({phoneNumber: ""})
    this.setState({...this.state, info: {...info, phones: newPhones} });
  }

  addEmail = () => {
    const { info } = this.state;
    const { emails } = info;

    let newEmails = emails;
    newEmails.push({emailAddress: ""})
    this.setState({...this.state, info: {...info, emails: newEmails} });
  }

  editEmailAddress = (value, index) => {
    const { info } = this.state;
    const { emails } = info;

    let newEmails = emails;
    newEmails[index].emailAddress = value;
    this.setState({...this.state, info: {...info, emails: newEmails} });
  }

  editPhoneNumber = (value, index) => {
    const { info } = this.state;
    const { phones } = info;

    let newPhones = phones;
    newPhones[index].phoneNumber = value;
    this.setState({...this.state, info: {...info, phones: newPhones} });
  }

  addAddress = () => {
    const { info } = this.state;
    const { addresses } = info;

    let newAddresses = addresses;
    newAddresses.push({
      city: "",
      street: "",
      neighborhood: ""
    })
    this.setState({...this.state, info: {...info, addresses: newAddresses} });
  }

  editStreet = (value, index) => {
    const { info } = this.state;
    const { addresses } = info;

    let newAddresses = addresses;
    newAddresses[index].street = value;
    this.setState({...this.state, info: {...info, addresses: newAddresses} });
  }

  editCity = (value, index) => {
    const { info } = this.state;
    const { addresses } = info;

    let newAddresses = addresses;
    newAddresses[index].city = value;
    this.setState({...this.state, info: {...info, addresses: newAddresses} });
  }

  editNeighborhood = (value, index) => {
    const { info } = this.state;
    const { addresses } = info;

    let newAddresses = addresses;
    newAddresses[index].neighborhood = value;
    this.setState({...this.state, info: {...info, addresses: newAddresses} });
  }

  removePhone = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { phones } = info;

      let newPhones = phones;
      newPhones.splice(index, 1)
      this.setState({...this.state, info: {...info, phones: newPhones} });
    }
  }

  removeAddress = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { addresses } = info;

      let newAddresses = addresses;
      newAddresses.splice(index, 1)
      this.setState({...this.state, info: {...info, addresses: newAddresses} });
    }
  }

  removeEmail = (index) => {
    if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
      const { info } = this.state;
      const { emails } = info;

      let newEmails = emails;
      newEmails.splice(index, 1)
      this.setState({...this.state, info: {...info, emails: newEmails} });
    }
  }

  render() {
    const { info } = this.state;
    const { addresses, emails, phones } = info;

    return (
      <div className="modal-container">
        <h2>Dados pessoais</h2>
        <div className="text-field-container">
          <TextField className="text-field" label="Nome" />
          <TextField className="text-field" label="Cpf" />
          <TextField className="text-field" label="Data de nascimento" />
          <TextField className="text-field" label="Nome da mãe" />
        </div>

        <div className="label-field-container"><h2>Telefone</h2><AddCircleOutlineIcon className="add-icon" onClick={() => this.addPhone()}/></div>
        <div className="text-field-container">
        {phones.map((entry, index) => (
          <Card className="additional-field">
            <TextField className="text-field-full" label="Telefone"  value={entry.phoneNumber} onChange={(e) => this.editPhoneNumber(e.target.value, index)}/>
            <ClearIcon className="pointer-icon" onClick={() => this.removePhone()}/>
          </Card>
        ))}
        </div>

        <div className="label-field-container"><h2>Email</h2> <AddCircleOutlineIcon className="add-icon" onClick={() => this.addEmail()}/></div>
        <div className="text-field-container">
        {emails.map((entry, index) => (
          <Card className="additional-field">
            <TextField className="text-field-full" label="Email" value={entry.emailAddress} onChange={(e) => this.editEmailAddress(e.target.value, index)}/>
            <ClearIcon className="pointer-icon" onClick={() => this.removeEmail()}/>
          </Card>
        ))}
        </div>

        <div className="label-field-container "> <h2>Endereço</h2> <AddCircleOutlineIcon className="add-icon" onClick={() => this.addAddress()}/></div>
        <div className="text-field-container">
          {addresses.map((entry, index) => (
            <Card key={"" + index} className="address-container">
              <div className="address-cell-container">
                <TextField
                  className="text-field-full"
                  label="Rua"
                  value={entry.street}
                  onChange={(e) => this.editStreet(e.target.value, index)}
                />
                <TextField className="text-field-full" label="Bairro" value={entry.neighborhood} onChange={(e) => this.editNeighborhood(e.target.value, index)}/>
                <TextField className="text-field-full" label="Cidade" value={entry.city} onChange={(e) => this.editCity(e.target.value, index)}/>
              </div>
              <ClearIcon className="pointer-icon" onClick={() => this.removeAddress(index)}/>
            </Card>
          ))}
          
        </div>
      </div>
    );
  }
}