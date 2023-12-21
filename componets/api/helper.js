import Axios from 'axios';

async function consumeExternalApi() {
    try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        const { data } = await Axios.get(apiUrl);

        const { userId, title, completed } = data;

        const processedData = {
            userId,
            title,
            completed
        };

        return processedData;
    } catch (error) {
        console.error('Error al consumir la API externa:', error.message);
        throw error;
    }
}

export default consumeExternalApi;