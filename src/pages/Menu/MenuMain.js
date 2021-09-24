import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';

import burger from '..//../images/burger.png';
import chicken from '..//../images/chicken-burger.png';
import vegan from '..//../images/vegan-burger.png';
import fries from '..//../images/fries.png';
import onion from '..//../images/onion-rings.png';
import water from '..//../images/water.png';
import soda from '..//../images/soda.png';

import '../../styles/menu-main.scss';


export function MenuMain() {
    return (
        <>
            <NavBar />
          <main className="menu-main">
          <h2>Almoço/Janta</h2>
            <section className="items-section">
                <div className="burgers-container">
                    <h3>Burgers</h3>
                    <div className="burgers">
                        <img src={burger} alt="burger"/>
                        <label htmlFor="burger">Carne</label>
                        <input className="items-input" type="radio" name="item" id="burger" />
                    </div>
                    <div className="burgers">
                        <img src={chicken} alt="chicken burger"/>
                        <label htmlFor="chicken-burger">Frango</label>
                        <input className="items-input" type="radio" name="item" id="chicken-burger" />
                    </div>
                    <div className="burgers">
                        <img src={vegan} alt="vegan-burger"/>
                        <label htmlFor="vegan-burger">Suco de Laranja</label>
                        <input className="items-input" type="radio" name="item" id="vegan-burger" />
                    </div>

                    </div>

                    <div className="sidedishes-container">
                        <h3>Acompanhamentos</h3>
                        <div className="sidedishes">
                            <img src={fries} alt="fries"/>
                            <label htmlFor="fries">Fritas</label>
                            <input className="items-input" type="radio" name="item" id="fries" />
                        </div>
                        <div className="sidedishes">
                            <img src={onion} alt="onion-rings"/>
                            <label htmlFor="onion-rings">Anéis de cebola</label>
                            <input className="items-input" type="radio" name="item" id="onion-rings" />
                        </div>
                    </div>

                    <div className="drinks-container">
                    <h3>Bebidas</h3>
                    <div className="drinks">
                        <img src={water} alt="water"/>
                        <label htmlFor="water">Água</label>
                        <input className="items-input" type="radio" name="item" id="water" />
                    </div>
                    <div className="drinks">
                        <img src={soda} alt="soda"/>
                        <label htmlFor="soda">Refrigerante</label>
                        <input className="items-input" type="radio" name="item" id="soda" />
                    </div>
                    
                    </div>
                </section>

                <aside className="orders-container">
                    <h3>Pedido</h3>
                    <div className="orders">

                    </div>
                    <div className="separator"></div>
                    <div className="items-cost-container">
                        <p className="item-price">Total:</p>
                        <p className="item-price">R$ 0,00</p>
                    </div>
                    <div className="menu-buttons-container">
                        <Button 
                            type="submit"
                            buttonText="Enviar"
                            className="menu-button confirm-order"
                        />
                    </div>
                    <div className="menu-buttons-container">
                        <Button 
                            type="submit"
                            buttonText="Cancelar"
                            className="menu-button cancel-order"
                        />
                    </div>
                </aside>
          </main>
        </>
    );
}