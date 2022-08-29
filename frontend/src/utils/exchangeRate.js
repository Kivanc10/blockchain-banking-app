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
      EUR: (1 / dataUSD.rates.EUR) * dataUSD.rates.TRY,
      EURUSD: 1 / dataUSD.rates.EUR,
      GBP: (1 / dataUSD.rates.GBP) * dataUSD.rates.TRY,
      XAU: 1 / dataUSD.rates.XAU,
      BTC: 1 / dataUSD.rates.BTC,
      ETH: 1 / dataUSD.rates.ETH,
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

export const getETHChange = async () => {
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH";
  const headers = {
    "X-CMC_PRO_API_KEY": "181b09aa-f100-473d-88e4-a27101b53ebb",
  };

  try {
    const res = await fetch(url, { method: "GET", headers });
    console.log(res);
    const json = await res.json();
    const percentage24h = json.data.ETH.quote.USD.percent_change_24h;
    if (!percentage24h) return 5;
    return percentage24h.toFixed(2);
  } catch (e) {
    console.log("error", e);
  }
  return 0;
};
