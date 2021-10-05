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
  }, []); 

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
        <div className="buttons-div">
          <Button
            className="status-buttons"
            buttonText="Pedidos Prontos"
            onClick={() => {
              setOrderStatusFilter("pending")
            }}
          />
          <Button
          className="status-buttons"
            buttonText="Entregar pedido"
            onClick={() => {
              setOrderStatusFilter("preparing")
            }}
          />
          <Button
          className="status-buttons"
          buttonText="Finalizados"
          onClick={() => {
            setOrderStatusFilter("finished")
          }}
          />
        </div>
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
      </main>
    </>
  );
}
