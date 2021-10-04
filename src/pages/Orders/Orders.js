import { useState, useEffect } from 'react';
import { Modal } from '../../components/Modal';
import { NavBar } from '../../components/NavBar'
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";


// pegar todos os pedidos e trazer se o status for pronto para servir ou finalizado

export function OrdersPage () {
    const [allOrders, setAllOrders] = useState([]);
    const [pendentOrders, setPendentOrders] = useState([]);
    const [preparingOrders, setPreparingOrders] = useState([]);
    const [doneOrders, setDoneOrders] = useState([]);

    console.log("carregando pedidos");

  useEffect(() => {
    listAllOrders().then((result) => {
      console.log(result);
      result.json().then((data) => {
        console.log(data);
        setAllOrders(data);
        
      });
    });
  }, []); // Only once, when pages load

  useEffect(() => {
    setPendentOrders(allOrders.filter(order => {
        return order.status === "pending"
    }))
    setPreparingOrders(allOrders.filter(order => {
        return order.status === "preparing"
    }))
    setDoneOrders(allOrders.filter(order => {
        return order.status === "done"
    }))
  }, [allOrders])


    return (
        <>
            <NavBar />
            <main className="orders-page-main">
                <h2 className="h2">Pedidos</h2>
                <section className="orders-page-section">
                    <div className="pendent-orders">
                        {pendentOrders.map((xuxu) => {
                        return <CardOrder order={xuxu} setAllOrders={setAllOrders} allOrders={allOrders}/>;
                    })}
                    </div>
                    <div className="preparing-orders">
                        {preparingOrders.map((xuxu) => {
                        return <CardOrder order={xuxu} setAllOrders={setAllOrders} allOrders={allOrders}/>;
                    })}
                    </div>
                    <div className="done-orders">
                        {doneOrders.map((xuxu) => {
                        return <CardOrder order={xuxu} setAllOrders={setAllOrders} allOrders={allOrders}/>;
                    })}
                    </div>
                </section>
            </main>
        </>
    )

    // const [isModalVisible, setIsModalVisible] = useState(false);
    // return (
    //     <>
    //         <NavBar />

//             {/* <div className="modal-test">
//                 <button onClick={() => setIsModalVisible(true)}>Open</button>
//                 {isModalVisible ? 
//                     <Modal> 
//                         <h2>Pedido enviado com sucesso</h2> 
//                     </Modal> : null}
//     //         </div> */}
//     //     </>
//     // )
}