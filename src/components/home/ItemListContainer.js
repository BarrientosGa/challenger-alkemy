import React from 'react';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import Formulario from '../home/Formulario';
import Item from '../home/Item';
import DatosDelMenu from "../home/DatosDelMenu";
import "../home/style.css";
const ItemListContainer = () => {
    const arraysConcatenados = useSelector(state => state.platosAgregados.platosVeganos).concat(useSelector(state => state.platosAgregados.platosNoVeganos));
    

    

    return (
        <>
            <Header />
            <div className="container .bg-light">
                <div className="row">
                    <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-12 col-sm-12">
                        <Formulario />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                        {arraysConcatenados.length > 0 &&  <DatosDelMenu platos={arraysConcatenados} />}
                    </div>
                </div>
                {arraysConcatenados.length === 0 ? <div className="row">
                    <div className="d-flex justify-content-center m-5 col-sm-10">
                        <p className='parrafo'>Todavía no armaste ningún menu...</p>
                    </div>
                </div> : <div className='container'>
                    <div className="row ">
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
