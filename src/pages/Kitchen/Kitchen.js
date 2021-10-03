import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { NavBar } from "../../components/NavBar";
import { CardOrder } from "../../components/CardOrder";
import { listAllOrders } from "../../services/dataService";

export function Kitchen() {
  // pegar todos os pedidos e trazer se o status for pendente ou em andamento
  const [allOrders, setAllOrders] = useState([]);
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

  return (
    <>
      <NavBar />
      <main className="kitchen-page-main">
        <h2 className="h2">Pedidos</h2>
        <section className="all-orders">
          {allOrders.map((xuxu) => {
            return <CardOrder order={xuxu} />;
          })}
        </section>
      </main>
    </>
  );
}
