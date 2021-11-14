function History ({shopHistory}){
    return (
        <div className="row mt-3">
            <div className="col">
                <h3>History</h3>
                <table className="table table-primary table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        shopHistory ? <span>something</span> : (
                            <tr>
                                <th colSpan="3">No history yet</th>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default History