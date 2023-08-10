const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const CUSTOMER_ID = '7133371040056';  // Replace with your customer's ID

const generateActivationUrl = async (customerId) => {
    try {
        const response = await axios.post(`${STORE_URL}/admin/api/2023-07/customers/${customerId}/account_activation_url.json`, {}, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        console.log(response)

        if (response.status === 201 && response.data.account_activation_url) {
            console.log(`Account activation URL for customer ID ${customerId}:`, response.data.account_activation_url);
            return response.data.account_activation_url;
        } else {
            console.log('Failed to generate account activation URL.');
            return null;
        }
    } catch (error) {
        console.error('Error generating account activation URL:', error.response ? error.response.data : error.message);
        return null;
    }
}

generateActivationUrl(CUSTOMER_ID);
