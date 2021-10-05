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

  console.log("carregando pedidos");

  useEffect(() => {
    listAllOrders().then((result) => {
      console.log(result);
      result.json().then((data) => {
        data.sort((a,b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        })
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
        <section className="pendent-orders">
            {selectedFilter.map((order) => {
            return <CardOrder order={order} setAllOrders={setAllOrders} allOrders={allOrders}/>;
          })}
        </section>
        {/* <section className="preparing-orders">
            {preparingOrders.map((order) => {
            return <CardOrder order={order} setAllOrders={setAllOrders} allOrders={allOrders}/>;
          })}
        </section> */}
      </main>
    </>
  );
}
