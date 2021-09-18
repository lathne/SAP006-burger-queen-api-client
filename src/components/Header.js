import logoIMG from '../images/Logo.svg';
import '../styles/header.scss'

export function Header() { 
  return (
      <header className="header">
          <img 
              className="responsive center" 
              src={logoIMG} 
              alt="Logo Burguer Queen" 
          />
      </header>
  )
}