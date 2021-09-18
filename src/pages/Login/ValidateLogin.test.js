import validate from './ValidateLogin.js'

test ('should fail without email', () => {
    const values = {email:'', password:''}
    const result = validate(values)
    expect(result.empty).toBe(false)
    expect(result.email).toBe('Por favor preencha o email')
});
