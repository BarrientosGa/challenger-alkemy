const ItemBuscados = ({ plato, add }) => {
    const addPlato = (e) => {
        add(e);
    }
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-2 d-xl-flex d-lg-flex d-md-flex d-sm-flex justify-content-center">
            <div className="card" style={{ width: 18 + "rem" }}>
                <img src={plato.image} className="card-img-top" alt={plato.title} />
                <div className="card-body text-center ">
                    <h5 className="card-title">{plato.title}</h5>
                </div>
                <div className="card-footer mt-2 text-center border-0 bg-body">
                    <button id={plato.id} onClick={addPlato} className='btn btn-secondary'>Agregar plato</button>
                </div>
            </div>
        </div>
    )
}

export default ItemBuscados;
