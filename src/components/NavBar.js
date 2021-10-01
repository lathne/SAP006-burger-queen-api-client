import reducedLogo from '../images/reducedLogo.svg'
import logoutIMG from '../images/exit.svg'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'
import goBack from '../images//go-back.svg'


export function NavBar() { 
  return (
      <nav className="nav-bar-hall">
          <div className="navbar-logo-container">
            <img 
                className="navbar-logo" 
                src={goBack} 
                alt="Logo Burguer Queen" 
            />
          </div>
          {/* <div className="anchors">
                <h2 className="anchor-orders">Acompanhar Pedidos</h2>
                <h2 className="anchor-kitchen">Cozinha</h2>
          </div> */}
          <div className="navbar-logo-container">
            <Link to="" className="logout-btn" >
                  <img 
                    className="btn-logout-img"
                    src={logoutIMG}
                    alt="Botão para logout"
                  />
            </Link>
          </div>
                
          
      </nav>
  )
}
