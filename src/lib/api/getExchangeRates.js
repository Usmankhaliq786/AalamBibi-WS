const { currency } = require("../data/currency");

// Function to convert currencies
function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    throw new Error("Invalid currency code");
  }

  // Convert the amount to the base currency (USD in this case)
  const amountInBase = amount / parseFloat(rates[fromCurrency]);

  // Convert the base currency to the target currency
  const convertedAmount = amountInBase * parseFloat(rates[toCurrency]);

  return convertedAmount;
}

export const getExchangeRates = (fromCurrency, toCurrency, amount ,rates) => {
  try {
    const converted = convertCurrency(
      amount,
      fromCurrency,
      toCurrency,
      rates
    );
    return converted;
  } catch (error) {
    console.error(error.message);
  }
};
// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2a7ae2824bad40d9a5f48a46e15f7ed4
