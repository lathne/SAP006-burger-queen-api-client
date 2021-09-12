import { Link } from 'react-router-dom'; //faz a navegação com links

import logoIMG from '../images/Logo.png'

import '../styles/login.scss';

export function Login() {
    return (
        <div className="login-page">
            <header className="login-page-header">
                <img className="responsive center" src={logoIMG} alt="Logo Burguer Queen" />
            </header>
            <main className="login-page-main">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <input 
                            name="email"
                            id="email"
                            type="text" 
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="email">Digite seu email</label>
                    </div>
                    <div className="form-group">
                        <input 
                            name="password"
                            id="password"
                            type="password" 
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="password">Digite sua senha</label>
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
