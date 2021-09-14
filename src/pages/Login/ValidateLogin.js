
export default function ValidateInfo(values) {
    let errors = { empty : true }

    if(!values.email) {
        errors.email = "Por favor preencha o email"
        errors.empty = false
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato do email inválido"
        errors.empty = false
    }

    if(!values.password) {
        errors.password = "Por favor preencha a senha"
        errors.empty = false
    } else if (values.password.length < 6) {
        errors.password = "Insira no mínimo 6 caracteres"
        errors.empty = false
    }

    return errors;
}
