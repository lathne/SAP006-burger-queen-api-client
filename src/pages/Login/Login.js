import { Link } from 'react-router-dom'; 

import UseForm from './UseForm.js'
import validate from './ValidateLogin.js';

import logoIMG from '../../images/Logo.svg'

import '../../styles/login.scss';

export function Login() {
    const {handleChange, values, handleSubmit, errors} = UseForm(validate);

    return (
        <div className="login-page">
            <header className="login-page-header">
                <img className="responsive center" src={logoIMG} alt="Logo Burguer Queen" />
            </header>
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
                       <div className="hidden">{errors.email && <p>{errors.email}</p>}</div>
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
                        <button type="submit">
                            Entrar
                        </button>
                    </div>
                </form>
                <p className="new-user">Novo funcionário?</p>
                <div><Link className="link" to="/register">Cadastre-se</Link></div>
            </main>
        </div>
    );
}




// import { useHistory } from 'react-router-dom'; //faz a navegação com botões
//função para navegação com botões

//     const history = useHistory();

//     function navigateToNewPage() {
//         history.push('/register')
//     }
