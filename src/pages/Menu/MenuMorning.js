import { useState } from "react";
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label'
import { Input } from '../../components/Input';
import {TabItems} from '../../components/TabItems';

import { getAllProducts, createOrder } from "../../services/dataService";

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
    const history = useHistory()

    const [breakfastOrders, setBreakfastOrders] = useState([])
    console.log(breakfastOrders)

    
    const [isModalVisible, setIsModalVisible] = useState(false);

    function filterByItemName(e) {
        let breakfast = allProducts.find(item => {
         
            return item.name === e.target.value
        }) 
        breakfast.qtd = 1
        setBreakfastOrders([...breakfastOrders, breakfast])
        console.log(breakfast)
        return [breakfast]
    }

    function sendToTheKitchen () {
      const orderProducts = breakfastOrders.map((product) => {
            return {id:product.id,
                    qtd: product.qtd}
      })  
      const  orderToSendToTheKitchen = {
            "client": location.state.nameClientInput,
            "table": location.state.table,
            "products": orderProducts
        }
        if (orderToSendToTheKitchen.products.id !== undefined &&
            orderToSendToTheKitchen.products.qtd !== undefined){
        createOrder(orderToSendToTheKitchen).then((result) => {
            if (result.ok){
                //setIsModalVisible(true)
               
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
        setBreakfastOrders([])
    }

    function addItem(item) {
        item.qtd += 1;
        setBreakfastOrders([...breakfastOrders]);
    }

    function removeItem(item) {
        if (item.qtd === 1) {
          breakfastOrders.splice(breakfastOrders.indexOf(item), 1);
          setBreakfastOrders([...breakfastOrders]);
        } else {
          item.qtd -= 1;
          setBreakfastOrders([...breakfastOrders]);
        }
    }

    function deleteItem(item) {
        breakfastOrders.splice(breakfastOrders.indexOf(item), 1);
        setBreakfastOrders([...breakfastOrders]);
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

                        <div className="drinks">
                            <div className="drink">
                                <img src={blackCoffee} alt="black coffee"/>
                                <Input
                                    name="drink"
                                    id="black-coffee"
                                    type="radio"
                                    value ="Café americano"
                                    className="input-radio"
                                    onChange={filterByItemName}
                                />
                                <Label
                                    className="label" 
                                    htmlFor="black-coffee"
                                    labelText="Café Preto"
                                />  
                            </div>
                       
                            <div className="drink">
                                <img src={latte} alt="latte"/>
                                <Input 
                                    className="input-radio" 
                                    type="radio" 
                                    name="drink" 
                                    id="latte" 
                                    value ="Café com leite"
                                    onChange={filterByItemName}
                                />
                                <Label 
                                    className="label" 
                                    htmlFor="latte" 
                                    labelText="Café com leite"
                                />
                            </div>
                   
                        <div className="drink">
                            <img src={orangeJuice} alt="orange juice"/>
                            <Input 
                                className="input-radio" 
                                type="radio" 
                                name="drink" 
                                id="orange-juice" 
                                value ="Suco de fruta natural"
                                onChange={filterByItemName}
                            />
                             <Label 
                                className="label juice" 
                                htmlFor="orange-juice"
                                labelText="Suco de Laranja"
                            />
                        </div>
                    </div>
                </div>
                
                    <div className="sandwiches-container">

                        <div className="title">
                            <h3>Sanduiches</h3>
                        </div>
                        
                        <div className="sandwiches">
                            <div className="sandwich">
                                <img src={toast} alt="toast"/>
                                <Input 
                                    className="input-radio" 
                                    type="radio" 
                                    name="toast" 
                                    id="toast" 
                                    value ="Misto quente"
                                    onChange={filterByItemName}
                                />
                                <Label 
                                    className="label" 
                                    htmlFor="toast"
                                    labelText="Misto Quente"
                                />
                            </div>
                        </div>
                    </div>  
                  
                </section>

                <aside className="orders-container">
                    <div className="title">
                        <h3>Pedidos</h3>
                    </div>
                    <div className="client-content">
                        <p>Cliente: {location.state.nameClientInput}</p>
                        <p>Mesa: {location.state.table}</p>
                    </div>
                    <div className="separator"></div>
                    <ul className="orders">
                       
                        {breakfastOrders.map(item => {
                            return (
                            <>
                                <TabItems
                                    itemKey={item.itemKey}
                                    itemQtd={item.qtd}
                                    itemName={item.name}
                                    itemPrice={item.price}

                                    removeItem={() => removeItem(item)}
                                    addItem={() => addItem(item)}
                                    deleteItem={() => deleteItem(item)}
                                // <li><p > {item.qtd} {item.name} {item.price}</p></li>
                                />
                            </>
                            )
                        })}
                    </ul>
                    <div className="separator"></div>

                    <div className="items-cost-container">
                        <p className="item-price">Total:</p>
                        <p className="item-price">R$ {breakfastOrders.reduce((a,b) => {
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
                    
                    