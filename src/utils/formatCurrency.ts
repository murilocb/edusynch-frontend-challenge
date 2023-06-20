const formatCurrency = (value: number): string => {
  // Format the currency value here using your desired formatting logic
  // For example, you can use Intl.NumberFormat to format the value with commas and currency symbols:
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return formattedValue;
};

export default formatCurrency;
