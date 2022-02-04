import React from 'react';
import Header from '../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { agregarPlato } from '../redux/platosAgregadosDuks';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ItemBuscados from './ItemBuscados';
const ItemSearchContainer = () => {
    const dispatch = useDispatch();
    const platos = useSelector(state => state.foods.platos);
    const add = (e) => {
        e.preventDefault();
        dispatch(agregarPlato(e.target.id));
    }
    return (
        <>
            <Header />

            {platos.length === 0 ? <Spinner /> :
                <div className='container'>
                    <div className="row">
                        {platos.map(plato => {
                            return <ItemBuscados key={plato.id} plato={plato} add={add} />
                        })}
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center col-sm m-4">
                            <Link to="/"><button className='btn btn-info'>Volver al inicio</button></Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemSearchContainer;
