const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const product_id = "8519496630584";  // Product you want to delete

const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${STORE_URL}/admin/api/2023-07/products/${productId}.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.status === 200) {
            console.log(`Successfully deleted product with ID: ${productId}`);
        } else {
            console.log('Failed to delete product.');
        }
    } catch (error) {
        console.error('Error deleting product:', error.response ? error.response.data : error.message);
    }
}

deleteProduct(product_id);
