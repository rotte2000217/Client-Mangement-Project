import React from 'react';
import TextField from '@material-ui/core/TextField';
import { GeneralSectionResources } from './Resources';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import { DatePicker } from "@material-ui/pickers";

export default class AddressSection extends React.Component {
    constructor(props) {
        super(props);
        const { fullName, document, birthday, motherName, fatherName } = this.props;

        this.state = {
            fullName,
            document,
            birthday,
            motherName,
            fatherName,
            width: window.innerWidth,
            Validations: {
                validfullName: fullName === '' ? false : true,
                fullNameFeedback: fullName === '' ? GeneralSectionResources.emptyField : '',
                validdocument: document === '' ? false : true,
                documentFeedback: document === '' ? GeneralSectionResources.emptyField : '',
                validmotherName: motherName === '' ? false : true,
                motherNameFeedback: motherName === '' ? GeneralSectionResources.emptyField : '',
                validfatherName: fatherName === '' ? false : true,
                fatherNameFeedback: fatherName === '' ? GeneralSectionResources.emptyField : '',
            }
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    isValidSection = () => {
        const { Validations } = this.state;

        let isValid = true;
        for (var [_key, value] of Object.entries(Validations)) {
            if (value === false) {
                isValid = false;
                return;
            }
        }

        return isValid;
    }

    cpfMask = (value) => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1')
    }

    validateCpf = (cpf) => {
        if (typeof cpf !== "string") return false
        cpf = cpf.replace(/[\s.-]*/igm, '')
        if (
            !cpf ||
            cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999" 
        ) {
            return false
        }
        var sum = 0
        var mod
        for (var i = 1; i <= 9; i++) 
            sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)
        mod = (sum * 10) % 11
        if ((mod == 10) || (mod == 11))  mod = 0
        if (mod != parseInt(cpf.substring(9, 10)) ) return false
        sum = 0
        for (var i = 1; i <= 10; i++) 
            sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i)
        mod = (sum * 10) % 11
        if ((mod == 10) || (mod == 11))  mod = 0
        if (mod != parseInt(cpf.substring(10, 11) ) ) return false
        return true
    }

    editName = (value) => {
        const { Validations } = this.state;

        let isValid = true;
        let feedback = '';

        if (value === '') {
            isValid = false;
            feedback = GeneralSectionResources.emptyField;
        }

        this.setState({
            fullName: value,
            Validations: {...Validations, validfullName: isValid, fullNameFeedback: feedback}
        });
    }
    
    editdocument = (value) => {
        const { Validations } = this.state;

        let isValid = true;
        let feedback = '';
        const document = this.cpfMask(value);
        
        
        if (document === '') {
            isValid = false;
            feedback = GeneralSectionResources.emptyField;
        } else {
            if (!this.validateCpf(document)) {
                isValid = false;
                feedback = GeneralSectionResources.invaliddocument;
            }
        }

        this.setState({
            document: document,
            Validations: {...Validations, validdocument: isValid, documentFeedback: feedback}
        });
    }
    
    editbirthday = (value) => {
        this.setState({birthday: value});
    }

    editmotherName = (value) => {
        const { Validations } = this.state;

        let isValid = true;
        let feedback = '';

        if (value === '') {
            isValid = false;
            feedback = GeneralSectionResources.emptyField;
        }

        this.setState({
            motherName: value,
            Validations: {...Validations, validmotherName: isValid, motherNameFeedback: feedback}
        });
    }

    editfatherName = (value) => {
        const { Validations } = this.state;

        let isValid = true;
        let feedback = '';

        if (value === '') {
            isValid = false;
            feedback = GeneralSectionResources.emptyField;
        }

        this.setState({
            fatherName: value,
            Validations: {...Validations, validfatherName: isValid, fatherNameFeedback: feedback}
        });
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { fullName, document, birthday, motherName, fatherName, Validations, width } = this.state;
        const isMobile = width <= 1000;

        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="whole-width">
                    <h2 className="label-field-container">Dados pessoais</h2>
                    <div className="text-field-container">
                        <TextField
                            error={!Validations.validfullName}
                            helperText={!Validations.validfullName && Validations.fullNameFeedback}
                            className="text-field"
                            label="Nome"
                            value={fullName}
                            onChange={(e) => this.editName(e.target.value)}
                        />
                        <TextField 
                            error={!Validations.validdocument}
                            helperText={!Validations.validdocument && Validations.documentFeedback}
                            className="text-field"
                            label="Cpf"
                            value={document}
                            onChange={(e) => this.editdocument(e.target.value)}
                        />
                        <DatePicker
                            label="Data de nascimento"
                            className="text-field"
                            value={birthday}
                            onChange={this.editbirthday}
                            format="DD/MM/YYYY"
                            autoOk
                            disableFuture
                            animateYearScrolling
                            disableToolbar={true}
                            variant={!isMobile && "inline"}
                        />
                        <TextField
                            error={!Validations.validmotherName}
                            helperText={!Validations.validmotherName && Validations.motherNameFeedback}
                            className="text-field"
                            label="Nome da mãe"
                            value={motherName}
                            onChange={(e) => this.editmotherName(e.target.value)}
                        />
                        <TextField
                            error={!Validations.validfatherName}
                            helperText={!Validations.validfatherName && Validations.fatherNameFeedback}
                            className="text-field"
                            label="Nome do pai"
                            value={fatherName}
                            onChange={(e) => this.editfatherName(e.target.value)}
                        />
                    </div>
                </div>
            </MuiPickersUtilsProvider>
        );
    }
}