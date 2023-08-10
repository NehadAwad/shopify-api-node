const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';

const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${STORE_URL}/admin/api/2023-07/orders.json`, {
            order: orderData
        }, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.data.order) {
            console.log('Order created:', response.data.order);
            return response.data.order;
        } else {
            console.log('Failed to create order.');
            return null;
        }
    } catch (error) {
        console.error('Error creating order:', error.response ? error.response.data : error.message);
        return null;
    }
}

// Example order data
const orderData = {
    line_items: [{
        variant_id: 8519907213624,  // replace with your product variant ID
        quantity: 2
    }],
    customer: {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@example.com"
    },
    billing_address: {
        first_name: "John",
        last_name: "Doe",
        address1: "123 Elm Street",
        city: "Anytown",
        province: "ON",
        country: "CA",
        zip: "12345",
        phone: "555-555-5555",
        email: "johndoe@example.com"
    },
    shipping_address: {
        first_name: "John",
        last_name: "Doe",
        address1: "123 Elm Street",
        city: "Anytown",
        province: "ON",
        country: "CA",
        zip: "12345",
        phone: "555-555-5555"
    }
};

createOrder(orderData);
