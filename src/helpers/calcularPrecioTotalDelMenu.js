

const calcularPrecioTotalDelMenu = (array) => {
    let precioTotal = 0;
    array.map(({pricePerServing}) => {
        precioTotal += pricePerServing;
    })
    return precioTotal;

};

export default calcularPrecioTotalDelMenu;
