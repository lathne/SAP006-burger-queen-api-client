import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';

import blackCoffee from '..//..//images/black-coffee.png';
import latte from '..//..//images/latte.png';
import orangeJuice from '..//..//images/orange-juice.png';
import toast from '..//..//images/toast.png';

import '../../styles/menu-morning.scss';

export function MenuMorning() {
    return (
        <>
          <NavBar />
          <main className="menu-morning">
            <h2>Café da Manhã</h2>
            <section className="items-section">
                <div className="drinks-container">
                    <h3>Bebidas</h3>
                    <div className="drinks">
                        <img src={blackCoffee} alt="black coffee"/>
                        <label htmlFor="black-coffee">Café Preto</label>
                        <input className="items-input" type="radio" name="item" id="black-coffee" />
                    </div>
                    <div className="drinks">
                        <img src={latte} alt="latte"/>
                        <label htmlFor="latte">Café com leite</label>
                        <input className="items-input" type="radio" name="item" id="latte" />
                    </div>
                    <div className="drinks">
                        <img src={orangeJuice} alt="orange juice"/>
                        <label htmlFor="orange-juice">Suco de Laranja</label>
                        <input className="items-input" type="radio" name="item" id="orange-juice" />
                    </div>

                    </div>

                    <div className="sandwiches-container">
                        <h3>Sanduíches</h3>
                        <div className="sandwich">
                            <img src={toast} alt="toast"/>
                            <label htmlFor="toast">Misto Quente</label>
                            <input className="items-input" type="radio" name="item" id="toast" />
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