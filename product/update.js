const axios = require('axios');

const API_KEY = 'b8af166248c944eb53b825b6be09f63e';
const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const PRODUCT_ID = "8519496630584"


const updateProduct = async () => {
    const body = {
        product: {
            id: PRODUCT_ID,
            title: "Updated Hiking Backpack" 
        }
    };

    try {
        const response = await axios.put(`${STORE_URL}/admin/api/2023-04/products/${PRODUCT_ID}.json`, body, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.product) {
            console.log('Product updated successfully:', response.data.product);
        } else {
            console.log('Product update failed.');
        }
    } catch (error) {
        console.error('Error updating product:', error.response ? error.response.data : error.message);
    }
}

updateProduct();
