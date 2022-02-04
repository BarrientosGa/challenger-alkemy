import axios from "axios";
import Swal from "sweetalert2";
// constantes
const initialState = {
    platosVeganos: [],
    platosNoVeganos: []
}

//types
const AGREGAR_PLATO_VEGANO = "AGREGAR_PLATO"
const AGREGAR_PLATO_NO_VEGANO = "AGREGAR_PLATO_NO_VEGANO"
const BORRAR_PLATO_VEGANO = "BORRAR_PLATO_VEGANO"
const BORRAR_PLATO_NO_VEGANO = "BORRAR_PLATO_NO_VEGANO"

//reducer
export default function platosAgregadosReducer(state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PLATO_VEGANO:
            return { ...state, platosVeganos: [...state.platosVeganos, action.payload] }
        case AGREGAR_PLATO_NO_VEGANO:
            return { ...state, platosNoVeganos: [...state.platosNoVeganos, action.payload] }
        case BORRAR_PLATO_VEGANO:
            return { ...state, platosVeganos: state.platosVeganos.filter(plato => plato.id !== action.payload) }
        case BORRAR_PLATO_NO_VEGANO:
            return { ...state, platosNoVeganos: state.platosNoVeganos.filter(plato => plato.id !== action.payload) }
        default:
            return state;
    }
}
//actions
export const agregarPlato = (id) => async (dispatch, getState) => {
    const baseURL = `${process.env.REACT_APP_API_ID}${id}/information?apiKey=${process.env.REACT_APP_KEY_API}`;
    const response = await axios.get(baseURL);
    const plato = response.data;
    const arrayDePlatosVeganos = getState().platosAgregados.platosVeganos;
    const arrayDePlatosNoVeganos = getState().platosAgregados.platosNoVeganos;
    const alertSuccess = () => {
        Swal.fire({
            title: '¡Plato agregado!',
            text: `${plato.title}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }
    const alertError = () => {
        Swal.fire({
            title: '¡Error!',
            text: `${plato.title} ya está agregado`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    const existePlato = (array, id) => {
        const arrayConPlatoRepetido = array.some(platoAgregado => platoAgregado.id === id);
        return arrayConPlatoRepetido;
    }


    if (plato.vegan) {
        if (arrayDePlatosVeganos.length < 2) {
            if (!existePlato(arrayDePlatosVeganos, plato.id)) {
                dispatch({ type: AGREGAR_PLATO_VEGANO, payload: plato })
                alertSuccess();
            }
            else{
                alertError();
            }
        }
    }
    else {
        if (arrayDePlatosNoVeganos.length < 2) {
            if (!existePlato(arrayDePlatosNoVeganos, plato.id)) {
                dispatch({ type: AGREGAR_PLATO_NO_VEGANO, payload: plato })
                alertSuccess();
            }
            else{
                alertError();
            }
        }
    }
};

export const borrarPlato = (id) => async (dispatch, getState) => {
    const baseURL = `${process.env.REACT_APP_API_ID}${id}/information?apiKey=${process.env.REACT_APP_KEY_API}`;
    const response = await axios.get(baseURL);
    const plato = response.data;

    if (plato.vegan) {
        dispatch({ type: BORRAR_PLATO_VEGANO, payload: plato.id })
    }
    else {
        dispatch({ type: BORRAR_PLATO_NO_VEGANO, payload: plato.id })
    }
}