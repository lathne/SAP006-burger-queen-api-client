
export default function ValidateInfo(values) {
    let errors = { empty : true }

    if(!values.table) {
        errors.table = "Por favor selecione a mesa para o atendimento"
        errors.empty = false
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = "Formato do email inválido"
    //     errors.empty = false
    }

    if(!values.nameClientInput) {
        errors.nameClientInput = "Digite o nome do cliente"
        errors.empty = false
    } else if (values.nameClientInput.length < 3) {
        errors.nameClientInput = "Insira no mínimo 3 caracteres"
        errors.empty = false
    }

    return errors;
}
