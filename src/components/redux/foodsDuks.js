import axios from "axios"

//constantes
const initialState = {
    platos: []
}
//types
    const OBTENER_PLATOS = 'OBTENER_PLATOS'
    const VACIAR_PLATOS = 'VACIAR_PLATOS'
//reducer
    export default function foodsReducer(state = initialState,action){
        switch(action.type){
            case OBTENER_PLATOS:
                return {...state, platos: action.payload}
            case VACIAR_PLATOS:
                return {...state, platos: []}
            default:
                return state;
        }
    }
//actions
export const obtenerPlatos = (plato) => async (dispatch,getState) => {
    const baseURL = `${process.env.REACT_APP_API_URL}`;
    try{
        const response = await axios.get(baseURL + `&query=${plato}`);
        dispatch({
            type: "OBTENER_PLATOS",
            payload: response.data.results
        })
    }
    catch(error){
        console.log(error)
    }
}
export const vaciarPlatos = () => (dispatch,getState) => {
    dispatch({
        type: "VACIAR_PLATOS"
    })
}