const axios = require('axios');

const API_KEY = 'b8af166248c944eb53b825b6be09f63e';
const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const product_id = "8519496630584"

const fetchProducts = async () => {
    try {
        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/products.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        console.log(response.data)

    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

fetchProducts();
