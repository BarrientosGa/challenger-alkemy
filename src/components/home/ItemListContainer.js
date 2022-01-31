import React from 'react';
import Header from '../Header';
import { useSelector } from 'react-redux';
import Formulario from '../home/Formulario';
import calcularPrecioTotalDelMenu from '../../helpers/calcularPrecioTotalDelMenu';
import calcularTiempoDePreparacion from '../../helpers/calcularTiempoDePreparacion';
import calcularIndiceAlimenticio from '../../helpers/calcularIndiceAlimenticio';
import Item from '../home/Item';
import { useEffect,useState } from 'react';
import DatosDelMenu from "../home/DatosDelMenu";
const ItemListContainer = () => {
    const arraysConcatenados = useSelector(state => state.platosAgregados.platosVeganos).concat(useSelector(state => state.platosAgregados.platosNoVeganos));
    const [precioDePlatos, setPrecioDePlatos] = useState(0);
    const [tiempoDePreparacion, setTiempoDePreparacion] = useState(0);
    const [indiceAlimenticio, setIndiceAlimenticio] = useState(0);

    useEffect(() => {
        setPrecioDePlatos(calcularPrecioTotalDelMenu(arraysConcatenados));
        setTiempoDePreparacion(calcularTiempoDePreparacion(arraysConcatenados));
        setIndiceAlimenticio(calcularIndiceAlimenticio(arraysConcatenados));
    }, [arraysConcatenados]);

    return (
        <>
            <Header />
            <div className="container .bg-light">
                <div className="row">
                    <div className="col-7">
                        <Formulario />
                    </div>
                    <div className="col-5">
                        {arraysConcatenados.length > 0 && <DatosDelMenu precio={precioDePlatos} tiempoDePreparacion={tiempoDePreparacion} indiceAlimenticio={indiceAlimenticio} />}
                    </div>
                </div>
                {arraysConcatenados.length === 0 ? <div className="row">
                    <div className="d-flex justify-content-center m-5 col-sm">
                        <p>todavía no armaste ningún menu</p>
                    </div>
                </div> : <div className='container'>
                    <div className="row">
                        {arraysConcatenados.map(item => {
                            return <Item key={item.id} item={item} />
                        })}
                    </div>
                </div>}
            </div>
        </>
    )
};

export default ItemListContainer;
