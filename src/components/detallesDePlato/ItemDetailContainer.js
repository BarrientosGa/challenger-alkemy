import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import getItem from '../../helpers/getItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import DatosDelMenu from '../home/DatosDelMenu';
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItem(id).then(item => {
            setItem(item);
        });
    }, [id]);

    return (
        <>
            <Header />
            {item.length === 0 ? <Spinner /> : item.map(elem => {
                return (
                    <div key={elem.id} className='container d-flex flex-column '>
                        <div className="row">
                            <div className="col align-self-center d-md-flex d-sm-flex d-xs-flex justify-content-center">
                                <img src={elem.image} alt={elem.title} />
                            </div>
                            <div className="col align-self-center">
                                <DatosDelMenu platos={item} />
                            </div>
                        </div>
                        <div className="row text-center m-5">
                            <Link to="/"> <button className='btn btn-info'>Volver al inicio</button></Link>
                        </div>
                    </div>
                )

            })}

        </>
    )
}

export default ItemDetailContainer;
