"use client";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";
import { useContext } from "react";

export default function PayFast() {
  const [
    _handleNext,
    _handleBack,
    _donationOption,
    _setDonationOption,
    _currencyRates,
    _updateQuantity,
    state,
  ] = useContext(DonateNowContext);

  const handleSubmit = async () => {
    try {
      const { quantity, userDetails } = state;
      const formData = {
        merchant_id: process.env.MERCHANT_ID,
        secured_key: process.env.SECURED_KEY,
        basket_id: userDetails.donation.replace(/ /g, "") + "-" + Date.now(),
        trans_amount: userDetails.actualAmount * quantity.toString(),
        currency_code: "PKR",
        order_date: new Date().toISOString(),
        customer_email: userDetails.email,
        customer_phone:userDetails.phone,
        txn_desc: userDetails.donation,

        
      };

      const response = await fetch("/api/getAccessToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.token) {
        alert("Failed to fetch token: " + (data.error || "Unknown error"));
        return;
      }

        // Create the form dynamically
        const form = document.createElement('form');
        form.id = 'PayFast_payment_form';
        form.name = 'PayFast-payment-form';
        form.method = 'post';
        form.action =process.env.PAYMENT_URL;

        // Define form fields
        const fields = [
            { label: 'Currency Code:', name: 'CURRENCY_CODE', value: 'PKR' },
            { label: 'Merchant ID:', name: 'MERCHANT_ID', value: process.env.MERCHANT_ID },
            { label: 'Merchant Name:', name: 'MERCHANT_NAME', value: 'UAT Demo Merchant' },
            { label: 'Token:', name: 'TOKEN', value: data.token },
            { label: 'Success URL:', name: 'SUCCESS_URL', value: process.env.SUCCESS_URL},
            { label: 'Failure URL:', name: 'FAILURE_URL', value: process.env.FAILURE_URL },
            { label: 'Checkout URL:', name: 'CHECKOUT_URL', value: process.env.CHECKOUT_URL },
            { label: 'Customer Email:', name: 'CUSTOMER_EMAIL_ADDRESS', value: formData.customer_email },
            { label: 'Customer Mobile:', name: 'CUSTOMER_MOBILE_NO', value: formData.customer_phone },
            { label: 'Transaction Amount:', name: 'TXNAMT', value: formData.trans_amount },
            { label: 'Basket ID:', name: 'BASKET_ID', value:formData.basket_id}
        ];

        // Add fields to the form
        fields.forEach(field => {
            const input = document.createElement('input');
            input.type = 'hidden'; // Hidden inputs for silent submission
            input.name = field.name;
            input.value = field.value;
            form.appendChild(input);
        });

        // Append form to the body
        document.body.appendChild(form);

        // Automatically submit the form
        form.submit();
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="container">
      <button className="payNowBtn" onClick={handleSubmit}>
        Pay Now
      </button>
    </div>
  );
}
