
export function Cards({
    cardTitle,
    clientName,
    clientTable,
    attendantName,
    orderTime,
    preparationTime,
    statusButtonClass,
    statusButtonText

}) {
    return (
        <div className="card-wrap">
            <div>
                <p>{cardTitle}</p>     
            </div>

            <div className="order-data">
                <p>CLIENTE: {clientName}</p>
                <p>MESA: {clientTable}</p>
                <p>ATENDENTE: {attendantName}</p>
                <p>ENTRADA: {orderTime}</p>
                <p>TEMPO DE PREPARO: {preparationTime}</p>
            </div>

            <div className="separator"></div>
            
            <div className="ordered-products">
                
            </div>

            <div>   
                <button className={statusButtonClass}>
                    {statusButtonText}
                </button>
            </div>
        </div>
    )
}