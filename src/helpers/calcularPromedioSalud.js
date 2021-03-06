const calcularPromedioSalud = (array) => {
    let promedio = 0;
    array.map(element => {
        return promedio += element.healthScore;
    });
    return (promedio / array.length).toFixed(2);
}


export default calcularPromedioSalud;
