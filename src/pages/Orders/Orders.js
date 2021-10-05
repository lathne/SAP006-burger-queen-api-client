import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";

import "../../styles/orders.scss";

export function OrdersPage() {
  const [allOrders, setAllOrders] = useState([]);
  const [pendentOrders, setPendentOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [doneOrders, setDoneOrders] = useState([]);

  useEffect(() => {
    listAllOrders().then((result) => {
      result.json().then((data) => {
        data.sort((a, b) => {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
        setAllOrders(data);
      });
    });
  }, []); // Only once, when pages load

  useEffect(() => {
    setPendentOrders(
      allOrders.filter((order) => {
        return order.status === "pending";
      })
    );
    setPreparingOrders(
      allOrders.filter((order) => {
        return order.status === "preparing";
      })
    );
    setDoneOrders(
      allOrders.filter((order) => {
        return order.status === "done";
      })
    );
  }, [allOrders]);

  return (
    <>
      <NavBar />
      <main className="orders-page-main">
        <h2 className="h2">Pedidos</h2>
        <div className="pendent-orders">
          {pendentOrders.map((xuxu) => {
            return (
              <CardOrder
                order={xuxu}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div>
        <div className="preparing-orders">
          {preparingOrders.map((xuxu) => {
            return (
              <CardOrder
                order={xuxu}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div>
        <div className="done-orders">
          {doneOrders.map((xuxu) => {
            return (
              <CardOrder
                order={xuxu}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div>
      </main>
    </>
  );

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
