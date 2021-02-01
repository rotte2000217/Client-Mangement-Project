import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import { InitialPhone, PhoneSectionResources } from './Resources';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class PhoneSection extends React.Component {
    constructor(props) {
        super(props);
        const { phones } = this.props;

        let Data = [];
        phones.forEach((phone) => Data.push({
            phone: phone,
            Validations: {
                validPhone: true,
                phoneFeedback: '',
                validareaCode: true,
                areaCodeFeedback: '',
                validcountryCode: true,
                countryCodeFeedback: ''
            }
        }));

        this.state = { Data };
    }

    isValidSection = () => {
        const { Data } = this.state;

        let isValid = true;
        Data.forEach((phone) => {
            for (var [_key, value] of Object.entries(phone.Validations)) {
                if (value === false) {
                    isValid = false;
                    return;
                }
            }
        });
        return isValid;
    }

    phoneMask = (value) => {
        let phone = value.replace(/\D/g, '');
        if (phone.length <= 9) {
            if (phone.length <= 8) {
                return phone
                    .replace(/(\d{4})(\d)/, '$1-$2')
            } else {
                return phone
                    .replace(/(\d{5})(\d)/, '$1-$2')
            }
        }
        return phone.substring(0, 9)
            .replace(/(\d{5})(\d)/, '$1-$2')
    }

    addPhone = () => {
        const { Data } = this.state;
        
        let newData = Data;
        newData.push(InitialPhone);

        this.setState({Data: newData});
    }

    editPhonenumber = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Phone.number = this.phoneMask(value);
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.phoneFeedback = PhoneSectionResources.emptyField;
        } else {
            if (value.length < 9) {
                isValid = false;
                newData[index].Validations.phoneFeedback = PhoneSectionResources.invalidPhone;
            }
        }

        newData[index].Validations.validPhone = isValid;

        this.setState({Data: newData});
    }

    editcountryCode = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Phone.countryCode = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.countryCodeFeedback = PhoneSectionResources.emptyField;
        } else {
            if (value.length > 4) {
                isValid = false;
                newData[index].Validations.countryCodeFeedback = PhoneSectionResources.invalidcountryCode;
            }
        }

        newData[index].Validations.validcountryCode = isValid;

        this.setState({Data: newData});
    }

    editareaCode = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Phone.areaCode = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.areaCodeFeedback = PhoneSectionResources.emptyField;
        } else {
            if (value.length !== 2) {
                isValid = false;
                newData[index].Validations.areaCodeFeedback = PhoneSectionResources.invalidareaCode;
            }
        }

        newData[index].Validations.validareaCode = isValid;

        this.setState({Data: newData});
    }

    editPhonetype = (value, index) => {
        const { Data } = this.state;

        let newData = Data;
        newData[index].Phone.type = value;

        this.setState({Data: newData});
    }

    removePhone = (index) => {
        if ( window.confirm("Tem certeza que seja remover esta entrada?")) {
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
                    <h2>Telefone</h2>
                    <AddCircleOutlineIcon className="add-icon" onClick={() => this.addPhone()}/>
                </div>
                <div className="text-field-container">
                {Data.map((entry, index) => (
                    <Card className="additional-field">
                        <div>
                            <TextField
                                error={!entry.Validations.validcountryCode}
                                helperText={!entry.Validations.validcountryCode && entry.Validations.countryCodeFeedback}
                                className="text-field-full"
                                label="Código do pais"
                                value={entry.Phone.countryCode}
                                onChange={(e) => this.editcountryCode(e.target.value, index)}
                            />
                            <TextField
                                error={!entry.Validations.validareaCode}
                                helperText={!entry.Validations.validareaCode && entry.Validations.areaCodeFeedback}
                                className="text-field-full"
                                label="Código de área"
                                value={entry.Phone.areaCode}
                                onChange={(e) => this.editareaCode(e.target.value, index)}
                            />
                            <TextField
                                error={!entry.Validations.validPhone}
                                helperText={!entry.Validations.validPhone && entry.Validations.phoneFeedback}
                                className="text-field-full"
                                label="Número"
                                value={entry.Phone.number}
                                onChange={(e) => this.editPhonenumber(e.target.value, index)}
                            />
                            <Select
                                className="text-field-full"
                                labelId="Tipo"
                                value={entry.Phone.type}
                                onChange={(e) => this.editPhonetype(e.target.value, index)}
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
            </div>
        );
    }
}