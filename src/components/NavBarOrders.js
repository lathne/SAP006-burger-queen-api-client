import reducedLogo from '../images/reducedLogo.svg'
import logoutIMG from '../images/exit.svg'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'

export function NavBarOrders() { 
  return (
      <nav className="nav-bar-hall">
          <div className="navbar-logo-container">
            <img 
                className="navbar-logo" 
                src={reducedLogo} 
                alt="Logo Burguer Queen" 
            />
          </div>
          <div className="anchors">
              <Link to="/orders" className="">
                <h2 className="anchor-orders">Acompanhar Pedidos</h2>
              </Link>
              <Link to="/hall" className="">
                <h2 className="anchor-kitchen">Hall</h2>
              </Link>
          </div>
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
