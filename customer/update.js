const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const CUSTOMER_ID = '7133597270328'; // Replace with the customer's ID you want to update

const updateCustomer = async (customerId, updatedData) => {
    try {
        const response = await axios.put(`${STORE_URL}/admin/api/2023-07/customers/${customerId}.json`, {
            customer: updatedData
        }, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.data.customer) {
            console.log('Updated customer:', response.data.customer);
            return response.data.customer;
        } else {
            console.log('Failed to update customer.');
            return null;
        }
    } catch (error) {
        console.error('Error updating customer:', error.response ? error.response.data : error.message);
        return null;
    }
}

// Example data to update - you can expand or modify this as required
const updatedData = {
    id: CUSTOMER_ID,
    first_name: "UpdatedFirstName", 
    last_name: "UpdatedLastName",
    email: "updatedemail@example.com"
};

updateCustomer(CUSTOMER_ID, updatedData);
