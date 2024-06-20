import axios from 'axios';

const API_URL = 'http://localhost:5454/api/transactions';

export const getTransactions = async (startDate, endDate) => {
    try {
        const response = await axios.get(API_URL, { params: { startDate, endDate } });
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};
