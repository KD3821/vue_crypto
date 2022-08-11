const API_KEY =
  "040b6deb41c793e8ad39f5cff44ec363d4fe5368136c7bfe8b6bc9d57e0ce99b";

const tickers = new Map();

//TODO: refactor to use URLSearchParams
export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickers.get(ticker) || [];
  tickers.set(ticker, [...subscribers, cb]);
};
