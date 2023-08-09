const axios = require('axios');

const API_KEY = 'b8af166248c944eb53b825b6be09f63e';
const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';

const createProduct = async () => {
    const body = {
        product: {
            title: "Hiking backpack"
        }
    };

    try {
        const response = await axios.post(`${STORE_URL}/admin/api/2023-04/products.json`, body, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.product) {
            console.log('Product created successfully:', response.data.product.id);
        } else {
            console.log('Product creation failed.');
        }
    } catch (error) {
        console.error('Error creating product:', error.response ? error.response.data : error.message);
    }
}

createProduct();
