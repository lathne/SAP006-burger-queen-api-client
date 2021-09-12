import { Link } from 'react-router-dom';
import logoIMG from '../images/Logo.png'

import '../styles/register.scss';

export function Register() {
    return (
        <div className="register-page">
            <header className="register-page-header">
                <img className="responsive center" src={logoIMG} alt="Logo Burguer Queen" />
            </header>
            <main className="register-page-main">
                <h2>Cadastro</h2>
                <form>
                <div className="form-group">
                        <input 
                            name="name"
                            id="name"
                            type="text" 
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="name">Digite seu nome</label>
                    </div>
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
                    <div className="form-group input-select-container">
                        <select className="input-select" name="role" id="role" required>
                            <option value=""></option>
                            <option value="atendente">Atendente</option>
                            <option value="cozinheiro">Cozinheiro(a)</option>
                        </select>
                        <label htmlFor="role">Selecione sua função</label>
                    </div>
                    <div className="form-group register-btn-container">
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>        
                </form>
                <p className="already-a-user">Ja tem uma Conta?</p>
                <div className="link-container"><Link className="link" to="/">Faça o login</Link></div>
            </main>
        </div>
    );
}