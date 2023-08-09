const axios = require('axios');

const API_ACCESS_TOKEN = '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'; // Your access token
const STORE_URL = 'https://nehad007.myshopify.com';

const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(
      `${STORE_URL}/admin/api/2023-07/customers.json`,
      customerData,
      {
        headers: {
          'X-Shopify-Access-Token': API_ACCESS_TOKEN,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Customer created:', response.data);
  } catch (error) {
    console.error('Error creating customer:', error.response ? error.response.data : error.message);
  }
};

const customerData = {
  customer: {
    first_name: 'Steve',
    last_name: 'Lastname',
    email: 'steve.lastname@example.com',
    phone: '+8801682279343',
    verified_email: true,
    addresses: [
      {
        address1: '123 Oak St',
        city: 'Ottawa',
        province: 'ON',
        phone: '+8801682279334',
        zip: '123 ABC',
        last_name: 'Lastname',
        first_name: 'Steve',
        country: 'CA',
      },
    ],
  },
};

createCustomer(customerData);
