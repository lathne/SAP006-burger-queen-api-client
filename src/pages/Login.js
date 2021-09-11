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
                        <label htmlFor="email">Digite seu email</label>
                        <input 
                            name="email"
                            id="email"
                            type="text" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Digite sua senha</label>
                        <input 
                            name="password"
                            id="password"
                            type="password" 
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group login-btn-container">
                        <button type="submit">
                            Entrar
                        </button>
                    </div>
                </form>
                <p className="new-user">Novo funcionário?</p>
                <div><a href="#">Cadastre-se</a></div>
            </main>
        </div>
    );
}