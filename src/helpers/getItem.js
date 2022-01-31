import axios from 'axios';
const getItem = async (id) => {
    const prueba = [];
    const key = "b04e587cd2b047ab987b310e7efe9da0";
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`;
    const response = await axios.get(url);
    try {
        const { data } = response;
        prueba.push(data);
        return prueba;
    }
    catch (error) {
        console.log(error);
    }
};

export default getItem;
