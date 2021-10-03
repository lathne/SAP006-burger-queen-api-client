import { Button } from "./Button"

export function CardOrder ({order}){
    console.log(`A minha ordem é ${order}`)
    return (        
        <>
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
            
            <Button />

        </>
    )
}