import React from 'react';
import Header from '../Header';
import { useSelector, useDispatch } from 'react-redux';
import { agregarPlato } from '../redux/platosAgregadosDuks';
import { Link } from 'react-router-dom';
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
            <div className='container'>
                <div className="row">
                    {platos.map(({ id, title, image }) => (
                        <div key={id} className="col-sm m-2 p-2">
                            <div className="card" style={{width: 18 + "rem"}}>
                                <img src={image} className="card-img-top" alt={title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{title}</h5>
                                    <button id={id} onClick={add} className='btn btn-secondary'>Agregar plato</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col-sm m-4">
                        <Link to="/"><button>volver al inicio</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemSearchContainer;
