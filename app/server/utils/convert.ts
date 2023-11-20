export function convertCurrencyStringToNumber(currencyString) {
  if (currencyString) {    
    // Remove non-numeric characters and the currency symbol
    const cleanedString = currencyString.replace(/[^0-9,]/g, '');

    // Replace comma with period and parse as a floating-point number
    const number = parseFloat(cleanedString.replace(',', '.'));

    return number;
  }
}
