const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const CUSTOMER_ID = '7133597270328';  // Replace with the desired customer's ID

const fetchCustomerById = async (customerId) => {
    try {
        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/customers/${customerId}.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.data.customer) {
            console.log('Fetched customer:', response.data.customer);
            return response.data.customer;
        } else {
            console.log(`Customer with ID ${customerId} not found.`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching customer:', error.response ? error.response.data : error.message);
        return null;
    }
}

fetchCustomerById(CUSTOMER_ID);
