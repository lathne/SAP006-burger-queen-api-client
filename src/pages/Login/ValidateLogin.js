
export default function ValidateInfo(values) {
    let errors = {}

    if(!values.email) {
        errors.email = "Por favor preencha o email"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato do email inválido"
    }

    if(!values.password) {
        errors.password = "Por favor preencha a senha"
    } else if (values.password.length < 6) {
        errors.password = "Insira no mínimo 6 caracteres"
    }

    return errors;
}
