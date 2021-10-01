import { useLocation } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label'
import { Input } from '../../components/Input';
import { getAllProducts } from "../../services/dataService";
import { useState, useEffect } from "react";
// import { NoteOrder } from './UseFormMenuMain';

import blackCoffee from '..//..//images/black-coffee.png';
import latte from '..//..//images/latte.png';
import orangeJuice from '..//..//images/orange-juice.png';
import toast from '..//..//images/toast.png';

import '../../styles/menu-morning.scss';

let allProducts = []
        getAllProducts().then( (result) => {
        result.json().then( (data)=> {
            allProducts = data
            console.log(allProducts)
        })
    })

export function MenuMorning() {
    const location = useLocation()
    console.log(location)

    const [sideOrders, setSideOrders] = useState([])
    console.log(sideOrders)

    

    // useEffect(() => {
    //     
    // })

    function filterByItemName(e) {
        let side = allProducts.find(item => {
            console.log(e.target.value)
            console.log("o valor do item clicado é" + e.target.value)
            return item.name === e.target.value
        }) 
            setSideOrders([...sideOrders, side])
            console.log(side)
        return [side]
    }


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
                            name="drink"
                            id="black-coffee"
                            type="radio"
                            value ="Café americano"
                            className="input-radio"
                            onChange={filterByItemName}
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
                            value ="Café com leite"
                            onChange={filterByItemName}
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
                            value ="Suco de fruta natural"
                            onChange={filterByItemName}
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
                                    value ="Misto quente"
                                    onChange={filterByItemName}
                                />
                            </div>
                        </div>
                    </div>  
                  
                </section>

                <aside className="orders-container">
                    <div className="title">
                        <h3>Pedidos</h3>
                    </div>
                    <ul className="orders">
                        <li>Cliente: {location.state.nameClientInput} Mesa: {location.state.table}</li>
                        {sideOrders.map(sideOrders => {
                            return (
                                <li><p > {sideOrders.quant} {sideOrders.name} {sideOrders.price}</p></li>
                            )
                        })}
                    </ul>
                    <div className="separator"></div>

                    <div className="items-cost-container">
                        <p className="item-price">Total:</p>
                        <p className="item-price">R$ {sideOrders.reduce((a,b) => {
                            return a + b.price
                        },0)}</p>
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
                    
                    