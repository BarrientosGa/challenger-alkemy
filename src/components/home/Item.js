import { useDispatch } from 'react-redux';
import { borrarPlato } from '../redux/platosAgregadosDuks';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const dispatch = useDispatch();
    const borrar = (e) => {
        dispatch(borrarPlato(e.target.id));
    }

    return (
        <div className="col-sm m-2">
            <img src={item.image} alt={item.title} className='img-fluid' />
            <h1>{item.tittle}</h1>
            <Link to={`/item/${item.id}`}><button>Ver detalles</button> </Link>
            <button id={item.id} onClick={borrar}>Eliminar plato</button>
        </div>
    )
}

export default Item;
