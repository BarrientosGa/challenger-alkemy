const calcularPromedioDePreparacion = (array) => {
    let promedio = 0;
    array.map(element => {
        promedio += element.readyInMinutes;
    });
    return promedio / array.length;
    
}

export default calcularPromedioDePreparacion;
