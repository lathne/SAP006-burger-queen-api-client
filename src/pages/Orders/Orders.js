import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { NavBar } from '../../components/NavBar'

// pegar todos os pedidos e trazer se o status for pronto para servir ou finalizado

export function OrdersPage () {

    // return (
    //     <>
    //         <NavBar />
    //         <main className="orders-page-main">
    //             <h2 className="h2">Pedidos</h2>
    //             <section className="orders-page-section">

    //             </section>
    //         </main>
    //     </>
    // )

    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <>
            <NavBar />

            <div className="modal-test">
                <button onClick={() => setIsModalVisible(true)}>Open</button>
                {isModalVisible ? 
                    <Modal> 
                        <h2>Pedido enviado com sucesso</h2> 
                    </Modal> : null}
            </div>
        </>
    )
}