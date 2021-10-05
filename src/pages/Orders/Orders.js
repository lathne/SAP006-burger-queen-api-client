import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";
import { Button } from "../../components/Button";

import "../../styles/orders.scss";

export function OrdersPage() {
  const [allOrders, setAllOrders] = useState([]);
  const [pendentOrders, setPendentOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [doneOrders, setDoneOrders] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState("pending");

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

  let selectedFilter = []
  if (orderStatusFilter === "pending"){
    selectedFilter = pendentOrders
  }else if(orderStatusFilter === "preparing"){
    selectedFilter = preparingOrders
  }else{
    selectedFilter = doneOrders
  }

  return (
    <>
      <NavBar />
      <main className="orders-page-main">
        <h2 className="h2">Pedidos</h2>
        <Button
        buttonText="Em preparo"
        onClick={() => {
          setOrderStatusFilter("pending")
        }}
        />
        <Button
        buttonText="Pedidos prontos"
        onClick={() => {
          setOrderStatusFilter("preparing")
        }}
        />
        <Button
        buttonText="Pedidos entregues"
        onClick={() => {
          setOrderStatusFilter("delivered")
        }}
        />
        <div className="pendent-orders">
          {selectedFilter.map((order) => {
            return (
              <CardOrder
                order={order}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div>
        {/* <div className="preparing-orders">
          {preparingOrders.map((order) => {
            return (
              <CardOrder
                order={order}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div> */}
        {/* <div className="done-orders">
          {doneOrders.map((xuxu) => {
            return (
              <CardOrder
                order={xuxu}
                setAllOrders={setAllOrders}
                allOrders={allOrders}
              />
            );
          })}
        </div> */}
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
