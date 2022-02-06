import { useEffect, useState } from 'react';
import calcularPrecioTotalDelMenu from '../../helpers/calcularPrecioTotalDelMenu';
import calcularPromedioDePreparacion from '../../helpers/calcularPromedioDePreparacion';
import calcularPromedioSalud from '../../helpers/calcularPromedioSalud';
const DatosDelMenu = ({ platos }) => {
    const [precioDePlatos, setPrecioDePlatos] = useState(0);
    const [tiempoDePrep, setTiempoDePreparacion] = useState(0);
    const [puntajeSalud, setPuntajeSalud] = useState(0);
    useEffect(() => {
        setPrecioDePlatos(calcularPrecioTotalDelMenu(platos));
        setTiempoDePreparacion(calcularPromedioDePreparacion(platos));
        setPuntajeSalud(calcularPromedioSalud(platos));
    }, [platos]);

    return (
        <div className="d-flex justify-content-center col-sm">
            < div className="card m-3" style={{ width: 19 + "rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Datos del menu</h5>
                    <p><b>Precio:</b> <span className="text-warning p-precio fw-bold">${precioDePlatos}</span></p>
                    <p><b>Promedio de preparación:</b><span className="text-warning p-precio fw-bold"> {tiempoDePrep}</span></p>
                    <p><b>Puntaje saludable:</b><span className="text-warning p-precio fw-bold"> {puntajeSalud}</span></p>
                </div>
            </div>
        </div>
    )
}

export default DatosDelMenu;

