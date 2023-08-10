const axios = require('axios');

const API_KEY = 'b8af166248c944eb53b825b6be09f63e';
const API_ACCESS_TOKEN = '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';
const STORE_URL = 'https://nehad007.myshopify.com';
const product_id = "8519496630584"

const fetchOrders = async () => {
    try {

        const body = {
            product: {
              title: "Hiking backpack"
            }
          };


        const response = await axios.get(`${STORE_URL}/admin/api/2023-07/products/${product_id}.json`, {
            headers: {
                'X-Shopify-Access-Token': API_ACCESS_TOKEN
            }
        });

        console.log(response.data)

        // azizulhakim007.0212@gmail.com
        // 2Spkd9H:c)uC@C-007

        // if (response.data.orders) {
        //     const orders = response.data.orders.map(order => {
        //         return {
        //             OrderID: order.id,
        //             CustomerID: order.customer.id,
        //             CustomerFirstName: order.customer.first_name,
        //             CustomerLastName: order.customer.last_name,
        //             OrderAmount: order.total_price,
        //             OrderStatus: order.financial_status
        //         }
        //     });

        //     const totalAmount = orders.reduce((sum, order) => sum + parseFloat(order.OrderAmount), 0);

        //     // console.log('Orders:', orders);
        //     // console.log('Total Order Amount:', totalAmount);
        // } else {
        //     console.log('No orders found.');
        // }
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

fetchOrders();
