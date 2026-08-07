export async function POST(request) {
  try {
    const { basket_id, trans_amount, currency_code } =
      await request.json();

    const tokenApiUrl = process.env.ACCESS_TOKEN_URL;

    const params = new URLSearchParams({
      MERCHANT_ID: process.env.MERCHANT_ID,
      SECURED_KEY: process.env.SECURED_KEY,
      BASKET_ID: basket_id,
      TXNAMT: trans_amount,
      CURRENCY_CODE: currency_code,
    });

    const response = await fetch(tokenApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok || !data.ACCESS_TOKEN) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch access token",
          details: data,
        }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({ token: data.ACCESS_TOKEN }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching token:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
