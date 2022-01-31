const calcularIndiceAlimenticio = (array) => {
    let indiceAlimenticio = 0;
    array.map(({healthScore}) => {
        indiceAlimenticio += healthScore;
    })
    indiceAlimenticio = indiceAlimenticio / array.length;
    return indiceAlimenticio;
}

export default calcularIndiceAlimenticio;
