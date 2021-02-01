import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import { AddressSectionResources, InitialAddress } from './Resources';

export default class AddressSection extends React.Component {
    constructor(props) {
        super(props);
        const { addresses } = this.props;

        let Data = [];
        addresses.forEach((address) => Data.push({
            Address: address,
            Validations: {
                validStreet: true,
                streetFeedback: '',
                validneighborhood: true,
                neighborhoodFeedback: '',
                validcity: true,
                cityFeedback: '',
                validstreetNumber: true,
                streetNumberFeedback: '',
                validzipCode: true,
                zipCodeFeedback: ''
            }
        }));

        this.state = { Data };
    }

    isValidSection = () => {
        const { Data } = this.state;

        let isValid = true;
        Data.forEach((address) => {
            for (var [_key, value] of Object.entries(address.Validations)) {
                if (value === false) {
                    isValid = false;
                    return;
                }
            }
        });
        return isValid;
    }

    zipCodeMask = (value) => {
        let zipCode = value.replace(/\D/g, '');
        if (zipCode.length <= 8) {
            return zipCode
                .replace(/(\d{5})(\d)/, '$1-$2')
        }
        return zipCode.substring(0, 8)
            .replace(/(\d{5})(\d)/, '$1-$2')
    }

    addAddress = () => {
        const { Data } = this.state;
        
        let newData = Data;
        newData.push(InitialAddress);

        this.setState({Data: newData});
    }

    editzipCode = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Address.zipCode = this.zipCodeMask(value);
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.zipCodeFeedback = AddressSectionResources.emptyField;
        } else {
            if (value.length < 9) {
                isValid = false;
                newData[index].Validations.zipCodeFeedback = AddressSectionResources.invalidzipCode;
            }
        }

        newData[index].Validations.validzipCode = isValid;

        this.setState({Data: newData});
    }

    editStreet = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Address.Street = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.streetFeedback = AddressSectionResources.emptyField;
        }

        newData[index].Validations.validStreet = isValid;

        this.setState({Data: newData});
    }

    editcity = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Address.city = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.cityFeedback = AddressSectionResources.emptyField;
        }

        newData[index].Validations.validcity = isValid;

        this.setState({Data: newData});
    }

    editAddressNumber = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Address.streetNumber = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.streetNumberFeedback = AddressSectionResources.emptyField;
        }

        newData[index].Validations.validstreetNumber = isValid;

        this.setState({Data: newData});
    }

    editneighborhood = (value, index) => {
        const { Data } = this.state;

        let isValid = true;
        let newData = Data;
        newData[index].Address.neighborhood = value;
        
        if (value === '') {
            isValid = false;
            newData[index].Validations.neighborhoodFeedback = AddressSectionResources.emptyField;
        }

        newData[index].Validations.validneighborhood = isValid;

        this.setState({Data: newData});
    }

    removeAddress = (index) => {
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
            <div>
                <div className="label-field-container ">
                    <h2>Endereço</h2>
                    <AddCircleOutlineIcon className="add-icon" onClick={() => this.addAddress()}/>
                </div>
                <div className="text-field-container">
                    {Data.map((entry, index) => (
                        <Card key={"" + index} className="address-container">
                            <div className="address-cell-container">
                                <TextField
                                    error={!entry.Validations.validzipCode}
                                    helperText={!entry.Validations.validzipCode && entry.Validations.zipCodeFeedback}
                                    className="text-field-full"
                                    label="CEP"
                                    value={entry.Address.zipCode}
                                    onChange={(e) => this.editzipCode(e.target.value, index)}
                                />
                                <TextField
                                    error={!entry.Validations.validStreet}
                                    helperText={!entry.Validations.validStreet && entry.Validations.streetFeedback}
                                    className="text-field-full"
                                    label="Rua"
                                    value={entry.Address.Street}
                                    onChange={(e) => this.editStreet(e.target.value, index)}
                                />
                                <TextField
                                    error={!entry.Validations.validstreetNumber}
                                    helperText={!entry.Validations.validstreetNumber && entry.Validations.streetNumberFeedback}
                                    className="text-field-full"
                                    label="Número"
                                    value={entry.Address.streetNumber}
                                    onChange={(e) => this.editAddressNumber(e.target.value, index)}
                                />
                                <TextField
                                    error={!entry.Validations.validneighborhood}
                                    helperText={!entry.Validations.validneighborhood && entry.Validations.neighborhoodFeedback}
                                    className="text-field-full"
                                    label="Bairro"
                                    value={entry.Address.neighborhood}
                                    onChange={(e) => this.editneighborhood(e.target.value, index)}
                                />
                                <TextField
                                    error={!entry.Validations.validcity}
                                    helperText={!entry.Validations.validcity && entry.Validations.cityFeedback}
                                    className="text-field-full"
                                    label="Cidade"
                                    value={entry.Address.city}
                                    onChange={(e) => this.editcity(e.target.value, index)}
                                />
                            </div>
                            <ClearIcon className="pointer-icon" onClick={() => this.removeAddress(index)}/>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}