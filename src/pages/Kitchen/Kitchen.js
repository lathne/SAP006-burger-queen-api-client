import { useState } from "react";
import { useLocation } from "react-router";
import { NavBar } from "../../components/NavBar";



export function Kitchen() {
    // pegar todos os pedidos e trazer se o status for pendente ou em andamento
    const [allOrders, setAllOrders] = useState([]);
    return (
        <>
            <NavBar />
            <main className="kitchen-page-main">
                <h2 className="h2">Pedidos</h2>
                <section className="all-orders">
                    
                </section>
            </main>
        </>
    )
}