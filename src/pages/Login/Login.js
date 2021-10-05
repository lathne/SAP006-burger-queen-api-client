import { Link } from 'react-router-dom'; 
import { Header } from '../../components/Header.js';
import { Button } from '../../components/Button.js';
import UseForm from './UseForm.js'
import validate from './ValidateLogin.js';

import '../../styles/login.scss';

export function Login() {
    const {handleChange, values, handleSubmit, errors} = UseForm(validate);

    return (
        <div className="login-page">
            <Header />
            <main className="login-page-main">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group input">
                    <label htmlFor="email">Email</label>
                        <input 
                            name="email"
                            id="email"
                            type="text" 
                            autoComplete="off"
                            value ={values.email}
                            onChange={handleChange}
                        />
                       <div className="error-message">{errors.email && <p>{errors.email}</p>}</div>
                    </div>
                    <div className="form-group input">
                    <label htmlFor="password">Senha</label>
                        <input 
                            name="password"
                            id="password"
                            type="password" 
                            autoComplete="off"
                            value ={values.password}
                            onChange={handleChange}
                        />
                        <div className="hidden">{errors.password && <p>{errors.password}</p>}</div>
                    </div>
                    <div className="form-group login-btn-container">
                       <Button 
                            type="submit"
                            buttonText="Entrar"
                            onClick={handleSubmit}
                            className="button-primary"
                        />
                    </div>
                </form>
                <p className="new-user">Novo funcionário?</p>
                <div><Link className="link" to="/register">Cadastre-se</Link></div>
            </main>
        </div>
    );
}
