import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label'
import { Input } from '../../components/Input';
import { getAllProducts } from "../../services/dataService";
import { useState } from "react";
import { NoteOrder } from './UseFormMenuMain';

import blackCoffee from '..//..//images/black-coffee.png';
import latte from '..//..//images/latte.png';
import orangeJuice from '..//..//images/orange-juice.png';
import toast from '..//..//images/toast.png';

import '../../styles/menu-morning.scss';

export function MenuMorning() {
    const {filterMenu} = NoteOrder()
    const [breakfast, setBreakfast] = useState([]);

    const breakfastItems = getAllProducts.filter((item) => item.type === "breakfast");
    console.log(breakfast)
    setBreakfast(breakfastItems);
    return (
        <>
          <NavBar />
          <main className="menu-morning">
            <h2 className="h2">Café da Manhã</h2>
            <div className="columns">
            <section className="items-section">
          
                <div className="drinks-container">
                
                    <div className="title">
                        <h3>Bebidas</h3>
                    </div>
                
                    <div className="drink">
                        <img src={blackCoffee} alt="black coffee"/>
                        <Label
                            className="label" 
                            htmlFor="black-coffee"
                            labelText="Café Preto"
                        />  
                        <Input
                            //quando esse item for acionado, deve pegar o objeto completo, encontrar o nome e preço e imprimir na comanda
                            name="drink"
                            id="black-coffee"
                            type="radio"
                            value =""
                            className="input-radio"
                        />
                    </div>
                
                    <div className="drink">
                        <img src={latte} alt="latte"/>
                        <Label 
                            className="label" 
                            htmlFor="latte" 
                            labelText="Café com leite"
                        />
                        <Input 
                            className="input-radio" 
                            type="radio" 
                            name="drink" 
                            id="latte" 
                            value =""
                        />
                    </div>

                    <div className="drink">
                        <img src={orangeJuice} alt="orange juice"/>
                        <Label 
                            className="label juice" 
                            htmlFor="orange-juice"
                            labelText="Suco de Laranja"
                        />
                        <Input 
                            className="input-radio" 
                            type="radio" 
                            name="drink" 
                            id="orange-juice" 
                            value =""
                        />
                    </div>
                </div>
                
                    <div className="sandwiches-container">

                        <div className="title">
                            <h3>Sanduiches</h3>
                        </div>
                        
                        <div className="sandwiches">
                            <div className="sandwich">
                                <img src={toast} alt="toast"/>

                                <Label 
                                    className="label" 
                                    htmlFor="toast"
                                    labelText="Misto Quente"
                                />
                                <Input 
                                    className="input-radio" 
                                    type="radio" 
                                    name="toast" 
                                    id="toast" 
                                    value =""
                                />
                            </div>
                        </div>
                    </div>  
                  
                </section>

                <aside className="orders-container">
                    <div className="title">
                        <h3>Pedidos</h3>
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



/*       <div className="drink">
            <img src={blackCoffee} alt="black coffee"/>
            <label className="label" htmlFor="black-coffee">Café Preto</label>
            <input className="input-radio" type="radio" name="drink" id="black-coffee" />
            </div>
            <div className="drink">
            <img src={latte} alt="latte"/>
            <label className="label" htmlFor="latte">Café com leite</label>
            <input className="input-radio" type="radio" name="drink" id="latte" />
            </div>
            <div className="drink">
            <img src={orangeJuice} alt="orange juice"/>
            <label className="label juice" htmlFor="orange-juice">Suco de Laranja</label>
            <input className="input-radio" type="radio" name="drink" id="orange-juice" />
        </div>
            
*/
                    
                    