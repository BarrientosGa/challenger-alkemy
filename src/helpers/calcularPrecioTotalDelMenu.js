

const calcularPrecioTotalDelMenu = (array) => {
    let precioTotal = 0;
    array.map(element => {
        return precioTotal += element.pricePerServing;
    });
    return precioTotal.toFixed(2);

};

export default calcularPrecioTotalDelMenu;
