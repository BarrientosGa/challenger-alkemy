import Header from '../Header';
import {useParams} from 'react-router-dom';
import getItem from '../../helpers/getItem';
import { useEffect, useState } from 'react';
import ItemDetail from '../detallesDePlato/ItemDetail';
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
            {item.length === 0 ? <p>cargando</p> : item.map(item => {
                return <ItemDetail item={item} key={item.id} />
            })}
        </>
    )
}

export default ItemDetailContainer;
