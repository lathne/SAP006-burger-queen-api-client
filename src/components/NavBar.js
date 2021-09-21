import reducedLogo from '../images/ReducedLogo.png'
import exitIMG from '../images/exit.png'
import '../styles/NavBar.scss'

export function NavBar() { 
  return (
      <nav className="nav-bar-hall">
          <img 
              className="responsive center" 
              src={reducedLogo} 
              alt="Logo Burguer Queen" 
          />
          {/* <div className="anchors">
                <h2 className="anchor-orders">Acompanhar Pedidos</h2>
                <h2 className="anchor-kitchen">Cozinha</h2>
          </div> */}
          <button type="button" className="btn-exit-" >
                <img className="btn-exit-img"
                src={exitIMG}
                alt="Botão para logout"/>
          </button>
                
          
      </nav>
  )
}
