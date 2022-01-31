const DatosDelMenu = ({ precio, tiempoDePreparacion, indiceAlimenticio }) => {
    return (
        <div className="d-flex justify-content-center col-sm">
            <h1>Datos del menu</h1>
            <p>Precio total del menu: ${precio}</p>
            <p>Promedio total de preparacion de todos los platos: {tiempoDePreparacion}</p>
            <p>Indice alimenticio total: {indiceAlimenticio}</p>
        </div>
    )
}

export default DatosDelMenu;

