import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import { EmailSectionResources, InitialEmail } from './Resources';

export default class EmailSection extends React.Component {
    constructor(props) {
        super(props);
        const { emails } = this.props;

        let Data = [];
        emails.forEach((email) => Data.push({Email: email, Valid: true, InputFeedback: ''}));

        this.state = { Data };
    }

    isValidSection = () => {
        const { Data } = this.state;

        let isValid = true;
        Data.forEach((entry) => {
            if (!entry.Valid) {
              isValid = false;
              return;
            }
        });
        return isValid;
    }

    addEmail = () => {
        const { Data } = this.state;
        
        let newData = Data;
        newData.push(InitialEmail);

        this.setState({Data: newData});
    }
    
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }    
    
    editemailAddress = (value, index) => {
        const { Data } = this.state;

        let isValidEmail = true;
        let newData = Data;
        newData[index].Email.emailAddress = value;
        
        if (value === '') {
            isValidEmail = false;
            newData[index].InputFeedback = EmailSectionResources.emptyEmailField;
        } else {
            isValidEmail = this.validateEmail(value);
            if (!isValidEmail) {
                newData[index].InputFeedback = EmailSectionResources.invalidEmail;
            }
        }
        newData[index].Valid = isValidEmail;

        this.setState({Data: newData});
    }

    removeEmail = (index) => {
        if (window.confirm("Tem certeza que seja remover esta entrada?")) {
            const { Data } = this.state;

            let newData = Data;
            newData.splice(index, 1);

            this.setState({Data: newData});
        }
    }
    
    render() {
        const { Data } = this.state;
        return (
            <div className="whole-width">
                <div className="label-field-container">
                    <h2>Email</h2>
                    <AddCircleOutlineIcon className="add-icon" onClick={() => this.addEmail()}/>
                </div>
                <div className="text-field-container">
                    {Data.map((entry, index) => (
                    <Card className="additional-field">
                        <TextField
                            type="email"
                            error={!entry.Valid}
                            helperText={!entry.Valid && entry.InputFeedback}
                            className="text-field-full"
                            label="Email"
                            value={entry.Email.emailAddress}
                            onChange={(e) => this.editemailAddress(e.target.value, index)}
                        />
                        <ClearIcon className="pointer-icon" onClick={() => this.removeEmail(index)}/>
                    </Card>
                    ))}
                </div>
            </div>
        );
    }
}