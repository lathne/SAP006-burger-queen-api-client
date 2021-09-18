import logoIMG from '../images/Logo.svg'

export function Header () {
    return (
        <header className="login-page-header">
            <img 
                className="responsive center" 
                src={logoIMG} 
                alt="Logo Burguer Queen" 
            />
        </header>
    )
}