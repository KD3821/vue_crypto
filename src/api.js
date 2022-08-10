const API_KEY =
  "040b6deb41c793e8ad39f5cff44ec363d4fe5368136c7bfe8b6bc9d57e0ce99b";

//TODO: refactor to use URLSearchParams
export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(
      ","
    )}&api_key=${API_KEY}`
  ).then((r) => r.json());
