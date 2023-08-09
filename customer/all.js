const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';

const fetchAllCustomers = async () => {
    try {
        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/customers.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        const customersName = response.data.customers.reduce((sum, id) => sum + id.id, 0)
        const cusId = response.data.customers.map(customer => ({id: customer.id}))
        console.log(customersName)
        console.log(cusId)


        if (response.data.customers) {
            // console.log('Fetched customers:', response.data.customers);
            return response.data.customers;
        } else {
            console.log('No customers found.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching customers:', error.response ? error.response.data : error.message);
        return [];
    }
}

fetchAllCustomers();
