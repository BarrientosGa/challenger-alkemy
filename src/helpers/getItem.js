import axios from 'axios';
const getItem = async (id) => {
    const array = [];
    const baseURL = `${process.env.REACT_APP_API_ID}${id}/information?apiKey=${process.env.REACT_APP_KEY_API}`;
    const response = await axios.get(baseURL);
    try {
        const { data } = response;
        array.push(data);
        return array;
    }
    catch (error) {
        console.log(error);
    }
};

export default getItem;
