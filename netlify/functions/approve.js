const axios = require('axios');
exports.handler = async (event) => {
  const { paymentId } = JSON.parse(event.body);
  try {
    const response = await axios.post(
      'https://api.testnet.minepi.com/v2/payments/approve',
      { paymentId },
      {
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Approval error:', error.response ? error.response.data : error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};