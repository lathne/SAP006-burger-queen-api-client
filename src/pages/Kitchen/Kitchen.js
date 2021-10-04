import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { NavBar } from "../../components/NavBar";
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";

import '../../styles/kitchen.scss'

export function Kitchen() {
  
  const [allOrders, setAllOrders] = useState([]);
  const [pendentOrders, setPendentOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);

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

  }, [allOrders])

  return (
    <>
      <NavBar />
      <main className="kitchen-page-main">
        <h2 className="h2">Pedidos</h2>
        <section className="pendent-orders">
            {pendentOrders.map((xuxu) => {
            return <CardOrder order={xuxu} setAllOrders={setAllOrders} allOrders={allOrders}/>;
          })}
        </section>
        <section className="preparing-orders">
            {preparingOrders.map((xuxu) => {
            return <CardOrder order={xuxu} setAllOrders={setAllOrders} allOrders={allOrders}/>;
          })}
        </section>
      </main>
    </>
  );
}
