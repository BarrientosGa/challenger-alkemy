import axios from "axios"

const getDate = async (datos) =>{
    try{
        const respuesta = await axios.post('http://challenge-react.alkemy.org/' , datos);
        localStorage.setItem("token", respuesta.data.token);
        return respuesta;
    }

    catch(error){
        return error;
    }
}

export default getDate