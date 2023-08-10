const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';

const fetchAllOrders = async () => {
    try {
        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/orders.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.data.orders && response.data.orders.length > 0) {
            console.log('Fetched orders:', response.data.orders);
            return response.data.orders;
        } else {
            console.log('No orders found.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching orders:', error.response ? error.response.data : error.message);
        return [];
    }
}

fetchAllOrders();
