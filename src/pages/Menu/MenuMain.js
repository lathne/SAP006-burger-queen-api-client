import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { NoteOrder } from './UseFormMenuMain';

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
    const {handleChange, orders, filterByItemName, sideOrders} = NoteOrder()

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
                            <input className="input-radio items" type="radio" name="burger" value="carne" id="burger" onChange={handleChange}/>
                        </div>
                        <div className="burger">
                            <img src={chicken} alt="chicken burger"/>
                            <label className="label" htmlFor="chicken-burger">Frango</label>
                            <input className="input-radio items" type="radio" name="burger"  value="frango" id="chicken-burger" onChange={handleChange}/>
                        </div>
                        <div className="burger">
                            <img src={vegan} alt="vegan-burger"/>
                            <label className="label" htmlFor="vegan-burger">Vegetariano</label>
                            <input className="input-radio items" type="radio" name="burger" value="vegetariano" id="vegan-burger" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="extras-container">
                        <div className="title">
                            <h3>Extras</h3>
                        </div>
                        <div className="extras">
                            <div className="extra">
                                <label className="label extra-items" htmlFor="simple">Simples</label>
                                <input className="input-radio" type="radio" name="extra1" value="Hambúrguer simples" id="simple" onChange={handleChange}/>
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="double">Duplo</label>
                                <input className="input-radio" type="radio" name="extra1" value="Hambúrguer duplo" id="double" onChange={handleChange}/>
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="cheese">Queijo</label>
                                <input className="input-radio" type="radio" name="extra2" value="queijo" id="cheese" onChange={handleChange}/>
                            </div>
                            <div className="extra">
                                <label className="label extra-items" htmlFor="egg">Ovo</label>
                                <input className="input-radio" type="radio" name="extra2" value="ovo" id="egg" onChange={handleChange}/>
                            </div>
                            <div className="extra">
                                <label className="label" htmlFor="none">Nenhum</label>
                                <input className="input-radio extra-items" type="radio" name="extra2" value="nenhum" id="none" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                        {/* mostra aqui o burger montado e pega o id */}
                </div>

                <div className="sidedishes-container">
                    <div className="title">
                        <h3>Acompanhamentos</h3>
                    </div>
                    <div className="sidedishes">
                        <div className="sidedishe">
                            <img src={fries} alt="fries"/>
                            <label className="label" htmlFor="fries">Fritas</label>
                            <input className="input-radio items" type="radio" name="side" value="Batata frita" id="fries" onChange={filterByItemName}/>
                        </div>
                        <div className="sidedishe">
                            <img src={onion} alt="onion-rings"/>
                            <label className="label" htmlFor="onion-rings">Anéis de cebola</label>
                            <input className="input-radio items" type="radio" name="side"  value="Anéis de cebola" id="onion-rings" onChange={filterByItemName}/>
                        </div>
                    </div>
                    {/* só pegar o id do item escolhido */}
                </div>

                <div className="drinks-container">
                    <div className="title">
                        <h3>Acompanhamentos</h3>
                    </div>
                    <div className="drinks">
                        <div className="drink">
                            <img src={water} alt="water"/>
                            <label className="label" htmlFor="water">Água</label>
                            <input className="input-radio items" type="radio" name="drink" value="Água 500mL" id="water" onChange={filterByItemName} />
                        </div>
                        <div className="drink">
                            <img src={soda} alt="soda"/>
                            <label className="label" htmlFor="soda">Refrigerante</label>
                            <input className="input-radio items" type="radio" name="drink" value="Refrigerante 500mL" id="soda" onChange={filterByItemName} />
                        </div>
                    </div>
                    {/* só pegar o id do item escolhido */}
                </div>
                
                
                
            </section>

                <aside className="orders-container">
                    <div className="title">
                        <h3>Pedido</h3>
                    </div>
                    <ul className="orders">
                        <li>Cliente: {location.state.nameClientInput} Mesa: {location.state.table}</li>
                        
                        {orders.map(order => {
                            console.log(order)
                            return (
                                <li><p >{order.quant} {order.name} {order.flavor} {order.complement} {order.price}</p></li>
                            )
                        })}

                        {sideOrders.map(sideOrder => {
                            return (
                                <li><p >{sideOrder.quant} {sideOrder.name} {sideOrder.price}</p></li>
                            )
                        })}

                    </ul>
                    <div className="separator"></div>
                    <div className="items-cost-container">
                        <p className="item-price">Total:</p>
                        <p className="item-price">R$ {orders.reduce((a,b) => {
                            return a + b.price
                        },0) + sideOrders.reduce((a,b) => {
                            return a + b.price
                        },0)}</p>
                    </div>
                    <div className="menu-buttons-container">
                        <Button 
                            type="button"
                            onClick={handleChange}
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