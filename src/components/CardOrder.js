import { upDateOrderStatus } from "../services/dataService"
import { Button } from "./Button"
import { useState } from "react";
import { Modal } from "./Modal";
import '../styles/cardOrder.scss'

export function CardOrder ({order, setAllOrders, allOrders}){
    const [modal, setModal] = useState({ text:"", show : false });

    const changeStatusToPreparing = () => {
        upDateOrderStatus(order.id, "preparing").then((result) => {
            if (result.ok){
                setModal({text:"Pedido iniciado.", show : true})
                order.status = "preparing"
                setAllOrders([...allOrders])
            }else{
                setModal({text:"Pedido não iniciado.", show : true})
            }
        })
    }

    const changeStatusToDone = () => {
        upDateOrderStatus(order.id, "done").then((result) => {
            if (result.ok){
                setModal({text:"Pedido pronto.", show : true})
                order.status = "done"
                setAllOrders([...allOrders])
            }else{
                setModal({text:"Pedido não pronto.", show : true})
            }
        })
    }

    const changeTimeDefault = new Date (order.createdAt)
    
    const lastUpDate = new Date(order.updatedAt)
    let preparingTime = 0
    if(order.processedAt !== null){
        const processedDate = new Date(order.processedAt)
        preparingTime = (lastUpDate.getTime() - processedDate.getTime())/1000/60
        preparingTime = Math.round(preparingTime)
    }
    return (        
        <main className="card-order-main">
            <h2>{order.status}</h2>
            <p>cliente: {order.client_name}</p>
            <p>Mesa: {order.table}</p>
            <p>Atendente: {order.user_id}</p>
            <p>Entrada: {`${changeTimeDefault.toLocaleTimeString()} - ${changeTimeDefault.toLocaleDateString()}`}</p>
            <p>Tempo de Preparo: {preparingTime} minutos</p>

            {order.Products.map(element => {
                return (
                <p>
                    {element.qtd}
                    {element.name}
                    {element.flavor}
                    {element.complement}
                </p>
                )
            })}
            {order.status === "pending"?
                 <Button buttonText="Iniciar Preparo" onClick={changeStatusToPreparing} />
            : <Button buttonText="Pedido Pronto" onClick={changeStatusToDone} />
            }

            <Modal children={modal.text} hide={modal.show} setHide={setModal} callback={()=>{}}></Modal>

        </main>
    )
}