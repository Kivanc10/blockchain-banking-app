export const getExchangeRates = async () => {
  const resUSD = await fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=USD"
  );

  const json = await resUSD.json();
  const dataUSD = json.data;
  //   console.log(dataTRY);
  console.log(dataUSD.rates.TRY);

  if (dataUSD) {
    const rates = {
      USD: dataUSD.rates.TRY * 1,
      EUR: dataUSD.rates.EUR * dataUSD.rates.TRY,
      EURUSD: 1 / dataUSD.rates.EUR,
      GBP: (1 / dataUSD.rates.GBP) * dataUSD.rates.TRY,
      XAU: 1 / dataUSD.rates.XAU,
      BTC: 1 / dataUSD.rates.BTC,
      ETH: 1 / dataUSD.rates.ETH,
      BNB: dataUSD.rates.BNB * 1,
      XRP: 1 / dataUSD.rates.XRP,
      ADA: 1 / dataUSD.rates.ADA,
      SOL: 1 / dataUSD.rates.SOL,
      DOGE: 1 / dataUSD.rates.DOGE,
    };

    Object.keys(rates).forEach((key) => {
      rates[key] = rates[key].toFixed(2);
    });

    return rates;
  }

  return {};
};
