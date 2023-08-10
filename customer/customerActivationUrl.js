const axios = require('axios');

const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const CUSTOMER_ID = '7133371040056';  // Replace with your customer's ID

const sendAccountInvite = async (customerId) => {
    try {
        const response = await axios.post(`${STORE_URL}/admin/api/2023-07/customers/${customerId}/send_invite.json`, {
            // You can customize the invite here, e.g., set a custom message
            "customer_invite": {
                "subject": "Activate your account"
            }
        }, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        if (response.status === 201) { // HTTP 201 means Created
            console.log(`Invite sent successfully for customer ID: ${customerId}`);
        } else {
            console.log('Failed to send invite.');
        }
    } catch (error) {
        console.error('Error sending account invite:', error.response ? error.response.data : error.message);
    }
}

sendAccountInvite(CUSTOMER_ID);
