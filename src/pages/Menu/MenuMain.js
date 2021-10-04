import { useLocation } from 'react-router-dom';

import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import {TabItems} from '../../components/TabItems';
import { Modal } from '../../components/Modal';

import { NoteOrder } from './UseFormMenuMain';
import { createOrder } from '../../services/dataService';

import burger from '..//../images/burger.png';
import chicken from '..//../images/chicken-burger.png';
import vegan from '..//../images/vegan-burger.png';
import fries from '..//../images/fries.png';
import onion from '..//../images/onion-rings.png';
import water from '..//../images/water.png';
import soda from '..//../images/soda.png';

import '../../styles/menu-main.scss';

export function MenuMain() {
    const location = useLocation()
    const {handleChange, orders, filterByItemName, sideOrders, cancelOrder, sendToTheKitchen, addBurger, addSideItem, removeBurger, removeSideItem, deleteBurger, deleteSideItem, modal, setModal, history} = NoteOrder()
    

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
                                    <input className="input-radio items" type="radio" name="burger" value="carne" id="burger" onChange={handleChange}/>
                                    <label className="label" htmlFor="burger">Carne</label>
                                </div>
                                <div className="burger">
                                    <img src={chicken} alt="chicken burger"/>
                                    <input className="input-radio items" type="radio" name="burger"  value="frango" id="chicken-burger" onChange={handleChange}/>
                                    <label className="label" htmlFor="chicken-burger">Frango</label>
                                </div>
                                <div className="burger">
                                    <img src={vegan} alt="vegan-burger"/>
                                    <input className="input-radio items" type="radio" name="burger" value="vegetariano" id="vegan-burger" onChange={handleChange}/>
                                    <label className="label" htmlFor="vegan-burger">Vegetariano</label>
                                </div>
                            </div>

                            <div className="extras-container">
                                <div className="title">
                                    <h3>Opções</h3>
                                </div>
                                <div className="extras">

                                    <div className="options">
                                        <div className="extra">
                                            <input className="input-radio" type="radio" name="extra1" value="Hambúrguer simples" id="simple" onChange={handleChange}/>
                                            <label className="label extra-items" htmlFor="simple">Simples</label>
                                        </div>
                                        <div className="extra">
                                            <input className="input-radio" type="radio" name="extra1" value="Hambúrguer duplo" id="double" onChange={handleChange}/>
                                            <label className="label extra-items" htmlFor="double">Duplo</label>
                                        </div>
                                    </div>

                                    <div className="title">
                                        <h3>Extras</h3>
                                    </div>

                                    <div className="extra-options">
                                        <div className="extra">
                                            <input className="input-radio" type="radio" name="extra2" value="queijo" id="cheese" onChange={handleChange}/>
                                            <label className="label extra-items" htmlFor="cheese">Queijo</label>
                                        </div>
                                        <div className="extra">
                                            <input className="input-radio" type="radio" name="extra2" value="ovo" id="egg" onChange={handleChange}/>
                                            <label className="label extra-items" htmlFor="egg">Ovo</label>
                                        </div>
                                        <div className="extra">
                                            <input className="input-radio" type="radio" name="extra2" value="nenhum" id="none" onChange={handleChange}/>
                                            <label className="label extra-items" htmlFor="none">Nenhum</label>
                                        </div>
                                    </div>

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
                                    <input className="input-radio items" type="radio" name="side" value="Batata frita" id="fries" onChange={filterByItemName}/>
                                    <label className="label" htmlFor="fries">Fritas</label>
                                </div>
                                <div className="sidedishe">
                                    <img src={onion} alt="onion-rings"/>
                                    <input className="input-radio items" type="radio" name="side"  value="Anéis de cebola" id="onion-rings" onChange={filterByItemName}/>
                                    <label className="label" htmlFor="onion-rings">Anéis de cebola</label>
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
                                    <input className="input-radio items" type="radio" name="drink" value="Água 500mL" id="water" onChange={filterByItemName} />
                                    <label className="label" htmlFor="water">Água</label>
                                </div>
                                <div className="drink">
                                    <img src={soda} alt="soda"/>
                                    <input className="input-radio items" type="radio" name="drink" value="Refrigerante 500mL" id="soda" onChange={filterByItemName} />
                                    <label className="label" htmlFor="soda">Refrigerante</label>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className="orders-container">
                        <div className="title">
                            <h3>Pedido</h3>
                        </div>
                        <div className="client-content">
                            <p>Cliente: {location.state.nameClientInput}</p>
                            <p>Mesa: {location.state.table}</p>
                        </div>
                        <div className="separator"></div>
                        <ul className="orders">
                        
                            {orders.map(order => {
                                console.log(order)
                                return (
                                    <>
                                        <TabItems
                                            itemKey={order.burgersKey}
                                            itemQtd={order.qtd}
                                            itemName={order.name}
                                            itemFlavor={order.flavor}
                                            itemComplement={order.complement}
                                            itemPrice={order.price}

                                            removeItem={() => removeBurger(order)}
                                            addItem={() => addBurger(order)}
                                            deleteItem={() => deleteBurger(order)}
                                        />
                                    </>
                                )
                            })}

                            {sideOrders.map(sideOrder => {
                                return (
                                    <>
                                        <TabItems
                                            itemKey={sideOrder.sideKey}
                                            itemQtd={sideOrder.qtd}
                                            itemName={sideOrder.name}
                                            itemPrice={sideOrder.price}

                                            removeItem={() => removeSideItem(sideOrder)}
                                            addItem={() => addSideItem(sideOrder)}
                                            deleteItem={() => deleteSideItem(sideOrder)}
                                        />
                                    </>
                                )
                            })}

                        </ul>
                        <div className="separator"></div>
                        <div className="items-cost-container">
                            <p className="item-price">Total:</p>
                            <p className="item-price">R$ {orders.reduce((a,b) => {
                                return a + b.price
                            },0) + sideOrders.reduce((a,b) => {
                                return a + b.price * b.qtd
                            },0)}</p>
                        </div>
                        <div className="menu-buttons-container">
                            <Button 
                                type="button"
                                onClick={sendToTheKitchen}
                                buttonText="Enviar"
                                className="menu-button confirm-order"
                            />
                    
                            <Button 
                                type="submit"
                                onClick={cancelOrder}
                                buttonText="Cancelar"
                                className="menu-button cancel-order"
                            />
                        </div>
                    </aside>
                </div>
                <Modal children={modal.text} hide={modal.show} setHide={setModal} callback={()=>{history.push("/hall")}}></Modal>
          </main>
        </>
    );
}

let allOrders = []
    createOrder().then( (result) => {
        result.json().then( (data)=> {
            allOrders = data
            console.log(allOrders)
        })
    })