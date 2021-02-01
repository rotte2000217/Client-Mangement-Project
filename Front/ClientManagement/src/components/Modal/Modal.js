import './Modal.css';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Api } from '../../rpc/Api';
import EmailSection from '../EmailSection/EmailSection';
import PhoneSection from '../PhoneSection/PhoneSection';
import AddressSection from '../AddressSection/AddressSection';
import GeneralSection from '../GeneralSection/GeneralSection';
import Button from '@material-ui/core/Button';
import moment from "moment";

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);

    this.emailSection = React.createRef();
    this.phoneSection = React.createRef();
    this.addressSection = React.createRef();
    this.generalSection = React.createRef();

    this.state = {
      info: {
        id: undefined,
        fullName: '',
        document: '',
        birthday: moment('01/01/1980', 'DD/MM/YYYY').toString(),
        motherName: '',
        fatherName: '',
        emails: [],
        addresses: [],
        phones: []
      },
      loading: false
    }
  }

  componentDidMount() {
    const { selectedPersonSummary } = this.props;

    if(!!selectedPersonSummary) {
      this.getClientDetails(selectedPersonSummary?.id);
    }
  }

  saveClient = () => {
    if (!this.isValidInput()) {
      alert('Por favor corrija os campos antes de salvar');
    } else {
      if(!!this.props.selectedPersonSummary) {
        this.updateClient();
      } else {
        this.createClient();
      }
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

    const response = await Api.deleteClient(selectedPersonSummary?.id);
  
    if (!!response) {
      this.setState({...this.state, loading: false});
      removeFromList(selectedPersonSummary?.id);
      closeModal();
    } else {
      alert('Não foi possível deletar as informações do cliente.');
      this.setState({...this.state, loading: false});
    }
  }

  async createClient() {
    this.setState({...this.state, loading: true});
  
    const clientInfo = await Api.createClient(this.getClientInfo());
    if (!!clientInfo) {
      this.setState({...this.state, loading: false});
      this.props.addToList();
      this.props.closeModal();
    } else {
      alert('Não foi possível salvar as informações do cliente.');
      this.setState({...this.state, loading: false});
    }
  }

  async updateClient() {
    this.setState({...this.state, loading: true});
    const clientInfo = this.getClientInfo()
    const response = await Api.updateClient(clientInfo);
    if (!!response) {
      this.props.addToList();
      this.props.closeModal();
    } else {
      alert('Não foi possível salvar as informações do cliente.');
    }
    this.setState({...this.state, loading: false});
  }

  getClientInfo() {
    const { info } = this.state;
    
    const emails = [];
    this.emailSection.current.state.Data.forEach((entry) => {
      emails.push(entry.Email);
    });

    const phones = [];
    this.phoneSection.current.state.Data.forEach((entry) => {
      phones.push(entry.phone);
    });

    const addresses = [];
    this.addressSection.current.state.Data.forEach((entry) => {
      addresses.push(entry.Address);
    });

    const generalInfo = this.generalSection.current.state;
    const { 
      fullName,
      document,
      birthday,
      motherName,
      fatherName
    } = generalInfo;

    return {
      ...info,
      fullName,
      document,
      birthday,
      motherName,
      fatherName,
      emails: emails,
      addresses: addresses,
      phones: phones
    };
  }

  isValidInput() {
    if (!this.emailSection.current.isValidSection()) {
      return false;
    }

    if (!this.generalSection.current.isValidSection()) {
      return false;
    }

    if (!this.addressSection.current.isValidSection()) {
      return false;
    }

    if (!this.phoneSection.current.isValidSection()) {
      return false;
    }

    return true;
  }

  render() {
    const { info, loading } = this.state;
    const { addresses, emails, phones, fullName, document, birthday, motherName, fatherName } = info;

    if (loading) {
      return (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      )
    }

    return (
      <div className="modal-container">
        <div className="save-delete-container">
          <Button variant="contained" color="primary" onClick={() => this.deleteClient()}>
            Deletar
          </Button>
          <Button variant="contained" color="primary" onClick={() => this.saveClient()}>
            Salvar
          </Button>
        </div>
        <GeneralSection
          ref={this.generalSection}
          fullName={fullName}
          document={document}
          birthday={birthday}
          motherName={motherName}
          fatherName={fatherName}
        />
        <PhoneSection phones={phones} ref={this.phoneSection}/>
        <EmailSection emails={emails} ref={this.emailSection}/>
        <AddressSection addresses={addresses} ref={this.addressSection}/>
      </div>
    );
  }
}
