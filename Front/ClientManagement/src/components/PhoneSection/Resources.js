export const PhoneSectionResources = {
    invalidcountryCode: 'O código de país deve ter entre 1 e 4 dígitos',
    invalidareaCode: 'O código de área deve possuir 2 dígitos',
    invalidPhone: 'Insira um telefone válido',
    emptyField: 'Este campo deve ser preenchido',
}
export const InitialPhone = {
    Phone: {
        countryCode: '',
        areaCode: '',
        number: '',
        type: 0
    },
    Validations: {
        validPhone: false,
        phoneFeedback: PhoneSectionResources.emptyField,
        validareaCode: false,
        areaCodeFeedback: PhoneSectionResources.emptyField,
        validcountryCode: false,
        countryCodeFeedback: PhoneSectionResources.emptyField,
    }
}