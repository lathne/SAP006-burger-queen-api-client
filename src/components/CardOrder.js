import { upDateOrderStatus } from "../services/dataService"
import { Button } from "./Button"
import '../styles/cardOrder.scss'

export function CardOrder ({order, setAllOrders, allOrders}){
    console.log(`A minha ordem é ${order}`)

    const changeStatusToPreparing = () => {
        upDateOrderStatus(order.id, "preparing").then((result) => {
            if (result.ok){
                alert("pedido atualizado")
                order.status = "preparing"
                setAllOrders([...allOrders])
            }else{
                alert(result)
            }
        })
    }

    const changeStatusToDone = () => {
        upDateOrderStatus(order.id, "done").then((result) => {
            if (result.ok){
                alert("pedido pronto")
                order.status = "done"
                setAllOrders([...allOrders])
            }else{

            }
        })
    }
    return (        
        <main className="card-order-main">
            <h2>{order.status}</h2>
            <p>cliente: {order.client_name}</p>
            <p>Mesa: {order.table}</p>
            <p>Atendente: {order.user_id}</p>
            <p>Entrada: {order.createdAt}</p>
            <p>Tempo de Preparo: </p>

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

        </main>
    )
}