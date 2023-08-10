const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';

const fetchCustomerCount = async () => {
    try {
        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/customers/count.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.data.count !== undefined) {
            console.log('Total number of customers:', response.data.count);
            return response.data.count;
        } else {
            console.log('Failed to retrieve customer count.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching customer count:', error.response ? error.response.data : error.message);
        return null;
    }
}

fetchCustomerCount();
