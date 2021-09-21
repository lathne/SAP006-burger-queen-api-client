import validate from './ValidateLogin.js'

test ('should instruct user about invalid email format', () => {
    const values = {email:'user', password:'123456'}
    const result = validate(values)
    expect(result.empty).toBe(false)
    expect(result.email).toBe('Formato do email inválido')
});

test ('should fail without password', () => {
    const values = {email:'', password:''}
    const result = validate(values)
    expect(result.empty).toBe(false)
    expect(result.password).toBe('Por favor preencha a senha')
});

test ('should instruct user about password length', () => {
    const values = {email:'test@user.com', password:'12'}
    const result = validate(values)
    expect(result.empty).toBe(false)
    expect(result.password).toBe('Insira no mínimo 6 caracteres')
});
