
export default function ValidateHall(values) {
    let errors = { empty : true }
    console.log(`no validate recebi ${!values.table}`)
    if(!values.table) {
        errors.table = "Por favor selecione a mesa para o atendimento"
        errors.empty = false
    }

    if(!values.nameClientInput) {
        errors.nameClientInput = "Qual o nome do cliente?"
        errors.empty = false
    } else if (values.nameClientInput.length < 2) {
        errors.nameClientInput = "Insira no mínimo 2 caracteres"
        errors.empty = false
    }

    return errors;
}
