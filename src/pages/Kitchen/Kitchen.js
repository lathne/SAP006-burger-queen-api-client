import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";
import { Button } from "../../components/Button";

import '../../styles/kitchen.scss'

export function Kitchen() {
  
  const [allOrders, setAllOrders] = useState([]);
  const [pendentOrders, setPendentOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState("pending");


  useEffect(() => {
    listAllOrders().then((result) => {
      result.json().then((data) => {
        data.sort((a,b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        })
        setAllOrders(data);
        
      });
    });
  }, []);

  useEffect(() => {
    setPendentOrders(allOrders.filter(order => {
        return order.status === "pending"
    }))
    setPreparingOrders(allOrders.filter(order => {
        return order.status === "preparing"
    }))
  
  }, [allOrders])

  let selectedFilter = []
  if (orderStatusFilter === "pending"){
    selectedFilter = pendentOrders
  }else{
    selectedFilter = preparingOrders
  }

  return (
    <>
      <NavBar />
      <main className="kitchen-page-main">
        <h2 className="h2">Pedidos</h2>
        <div className="buttons-div">
          <Button
          className="status-buttons"
          buttonText="Em preparo"
          onClick={() => {
            setOrderStatusFilter("pending")
          }}
          />
          <Button
          className="status-buttons"
          buttonText="Pedidos prontos"
          onClick={() => {
            setOrderStatusFilter("preparing")
          }}
          />
        </div>
        <section className="pendent-orders">
            {selectedFilter.map((order) => {
            return <CardOrder order={order} setAllOrders={setAllOrders} allOrders={allOrders}/>;
          })}
        </section>
      </main>
    </>
  );
}
