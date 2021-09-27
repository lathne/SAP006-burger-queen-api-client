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
          <h2 className="h2">Almoço/Janta</h2>
          <div className="columns">
            <section className="items-section">
                <div className="burgers-container">
                    <div className="title">
                        <h3>Burgers</h3>
                    </div>
                    <div className="burgers">
                        <div className="burger">
                            <img src={burger} alt="burger"/>
                            <label className="label" htmlFor="burger">Carne</label>
                            <input className="input-radio items" type="radio" name="burger" id="burger" />
                        </div>
                        <div className="burger">
                            <img src={chicken} alt="chicken burger"/>
                            <label className="label" htmlFor="chicken-burger">Frango</label>
                            <input className="input-radio items" type="radio" name="burger" id="chicken-burger" />
                        </div>
                        <div className="burger">
                            <img src={vegan} alt="vegan-burger"/>
                            <label className="label" htmlFor="vegan-burger">Vegetariano</label>
                            <input className="input-radio items" type="radio" name="burger" id="vegan-burger" />
                        </div>
                    </div>
                    <div className="extras-container">
                        <div className="title">
                            <h3>Extras</h3>
                        </div>
                        <div className="extras">
                            <div className="extra">
                                <label className="label extra-items" htmlFor="simple">Simples</label>
                                <input className="input-radio" type="radio" name="extra1" id="simple" />
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="double">Duplo</label>
                                <input className="input-radio" type="radio" name="extra1" id="double" />
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="cheese">+ Queijo</label>
                                <input className="input-radio" type="radio" name="extra2" id="cheese" />
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="egg">+ Ovo</label>
                                <input className="input-radio" type="radio" name="extra3" id="egg" />
                            </div>
                            {/* <div className="extra">
                                <label className="label" htmlFor="none">Nenhum</label>
                                <input className="input-radio extra-items" type="radio" name="extra4" id="none" />
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className="sidedishes-container">
                    <div className="title">
                        <h3>Acompanhamentos</h3>
                    </div>
                    <div className="sidedishes">
                        <div className="sidedishe">
                            <img src={fries} alt="fries"/>
                            <label className="label" htmlFor="fries">Fritas</label>
                            <input className="input-radio items" type="radio" name="side" id="fries" />
                        </div>
                        <div className="sidedishe">
                            <img src={onion} alt="onion-rings"/>
                            <label className="label" htmlFor="onion-rings">Anéis de cebola</label>
                            <input className="input-radio items" type="radio" name="side" id="onion-rings" />
                        </div>
                    </div>
                </div>

                <div className="drinks-container">
                    <div className="title">
                        <h3>Acompanhamentos</h3>
                    </div>
                    <div className="drinks">
                        <div className="drink">
                            <img src={water} alt="water"/>
                            <label className="label" htmlFor="water">Água</label>
                            <input className="input-radio items" type="radio" name="drink" id="water" />
                        </div>
                        <div className="drink">
                            <img src={soda} alt="soda"/>
                            <label className="label" htmlFor="soda">Refrigerante</label>
                            <input className="input-radio items" type="radio" name="drink" id="soda" />
                        </div>
                    </div>
                </div>
            </section>

                <aside className="orders-container">
                    <div className="title">
                        <h3>Pedido</h3>
                    </div>
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
                 
                        <Button 
                            type="submit"
                            buttonText="Cancelar"
                            className="menu-button cancel-order"
                        />
                    </div>
                </aside>
            </div>
          </main>
        </>
    );
}