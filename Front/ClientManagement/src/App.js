import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ContactCard from './components/ContactCard/ContactCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import ContactModal from './components/Modal/Modal';
import { Utils } from './Utils';
import { Api } from './rpc/Api';
import moment from "moment";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Theme';
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

moment.locale('pt-BR');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
      clientCardList: undefined,
      loading: false,
      selectedPersonSummary: undefined,
    }
  }
  componentDidMount() {
    this.loadClientList();
  }

  async loadClientList() {
    this.setState({...this.state, loading: true});
    const clientList = await Api.getClientList();
    if (!!clientList) {
      this.setState({...this.state, clientCardList: clientList, loading: false});
    } else {
      alert('Não foi possível carregar os clientes, tente novamente mais tarde.');
      this.setState({...this.state, loading: false});
    }
  }

  openModal = (clientInfo) => {
    this.setState({...this.state, modalOpened: true, selectedPersonSummary: clientInfo});
  }

  closeModal = () => {
    this.setState({...this.state, modalOpened: false, selectedPersonSummary: undefined});
  }

  removeFromList = (id) => {
    const { clientCardList } = this.state;

    let newList = Utils.objectClone(clientCardList);
    newList = newList.filter((value) => value.id !== id);
    this.setState({...this.state, clientCardList: newList})
  }

  render() {
    const { clientCardList, loading, modalOpened } = this.state;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={theme}>
          <div className="main-container">
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6" className="title">
                  Clientes
                </Typography>
              </Toolbar>
            </AppBar>
      
            <div>
              {loading ? (
                <div className="circular-list">
                  <CircularProgress />
                </div>
              ) : (
                <div className="content-container">
                  {!!clientCardList && clientCardList.map((clientInfo) => (
                    <ContactCard
                      key={clientInfo.id}
                      name={clientInfo.fullName}
                      document={clientInfo.document}
                      openModal={() => this.openModal(clientInfo)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <Modal
              className="modal"
              open={modalOpened}
              onClose={this.closeModal}
            >
              <ContactModal
                closeModal={this.closeModal}
                selectedPersonSummary={this.state.selectedPersonSummary}
                removeFromList={this.removeFromList}
                addToList={() => this.loadClientList()}
              />
            </Modal>

            <Fab
              className="floating-button"
              color="secondary"
              aria-label="add"
              onClick={() => this.openModal()}
            >
              <AddIcon />
            </Fab>
          </div>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}
