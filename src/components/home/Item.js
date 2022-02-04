import { useDispatch } from 'react-redux';
import { borrarPlato } from '../redux/platosAgregadosDuks';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const dispatch = useDispatch();
    const borrar = (e) => {
        dispatch(borrarPlato(e.target.id));
    }

    return (
        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-xl-flex d-lg-flex d-md-flex d-sm-flex justify-content-center">
            <div className="card mt-3" style={{ width: 18 + "rem" }}>
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title p-2 fs-5">{item.title}</h5>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/item/${item.id}`}><button className='btn btn-primary'>Ver detalles</button> </Link>
                    <button id={item.id} onClick={borrar} className='btn btn-danger'>Eliminar plato</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
