const calcularPromedioDePreparacion = (array) => {
    let promedio = 0;
    array.map(element => {
        return promedio += element.readyInMinutes;
    });
    return promedio / array.length;

}

export default calcularPromedioDePreparacion;
