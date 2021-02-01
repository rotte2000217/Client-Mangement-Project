export const AddressSectionResources = {
    invalidzipCode: 'Insira um CEP válido',
    emptyField: 'Este campo deve ser preenchido',
}
export const InitialAddress = {
    Address: {
        Street: '',
        neighborhood: '',
        city: '',
        streetNumber: '',
        zipCode: ''
    },
    Validations: {
        validStreet: false,
        streetFeedback: AddressSectionResources.emptyField,
        validneighborhood: false,
        neighborhoodFeedback: AddressSectionResources.emptyField,
        validCity: false,
        cityFeedback: AddressSectionResources.emptyField,
        validstreetNumber: false,
        streetNumberFeedback: AddressSectionResources.emptyField,
        validzipCode: false,
        zipCodeFeedback: AddressSectionResources.emptyField
    }
}
