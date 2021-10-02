import { useLocation } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label'
import { Input } from '../../components/Input';
import { getAllProducts, createOrder } from "../../services/dataService";
import { useState } from "react";
import { useHistory } from 'react-router';

import blackCoffee from '..//..//images/black-coffee.png';
import latte from '..//..//images/latte.png';
import orangeJuice from '..//..//images/orange-juice.png';
import toast from '..//..//images/toast.png';

import '../../styles/menu-morning.scss';

let allProducts = []
        getAllProducts().then( (result) => {
        result.json().then( (data)=> {
            allProducts = data
        })
    })

export function MenuMorning() {
    const location = useLocation()

    const [sideOrders, setSideOrders] = useState([])

    function filterByItemName(e) {
        let side = allProducts.find(item => {
            return item.name === e.target.value
        }) 
        side.quant = 1
        setSideOrders([...sideOrders, side])
        return [side]
    }

    const history = useHistory()

    function sendToTheKitchen () {
      const orderProducts = sideOrders.map((product) => {
            return {id:product.id,
                    qtd:product.quant}
      } )  
      const  orderToSendToTheKitchen = {
            "client": location.state.nameClientInput,
            "table": location.state.table,
            "products": orderProducts
        }
        if (orderToSendToTheKitchen.products.length > 0){
        createOrder(orderToSendToTheKitchen).then((result) => {
            if (result.ok){
                alert("pedido criado com sucesso")
                history.push("/hall")
            }else {
                alert("o cozinheiro tá de folga")
            }
        }).catch((result) => {
            alert(result)
        })}else{
            alert("estão faltando dados para o pedido")
        }
    }

    function cancelOrder () {
        setSideOrders([])
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
                            type="button"
                            buttonText="Enviar"
                            onClick={sendToTheKitchen}
                            className="menu-button confirm-order"
                        />
                   
                        <Button 
                            type="button"
                            buttonText="Cancelar"
                            onClick={cancelOrder}
                            className="menu-button cancel-order"
                        />
                    </div>
                </aside>
             </div>
          </main>
        </>
    );
    
}
                    
                    