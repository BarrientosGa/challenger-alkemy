const calcularTiempoDePreparacion = (array) => {
    let promedio = 0;
    array.map(({readyInMinutes}) =>{
        promedio += readyInMinutes;
    })
    promedio = promedio / array.length;
    return promedio;
}

export default calcularTiempoDePreparacion;
