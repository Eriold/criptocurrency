interface Tickers {
  id: string,
  name: string,
  symbol: string,
  price_usd: string,
  price_btc: string,
  market_cap_usd?: string,
  percent_change_1h?: string,
  percent_change_24h?: string,
  percent_change_7d?: string,
  volume24?: string,
}

export const getTickers = async () => {
  // const url = `https://api.coinlore.net/api/tickers/?start=0&limit=400`
  const url = `https://api.coinlore.net/api/tickers/?start=0&limit=4`;

  const response = await fetch(url);
  const {data} = await response.json();

  const massageData = data.map((current: Tickers) => ({
    id: current.id,
    name: current.name,
    symbol: current.symbol,
    priceUSD: current.price_usd,
    priceBTC: current.price_btc
  }))

  return massageData;
}

export const getCoinDetail = async (id: string) => {
  const url = `https://api.coinlore.net/api/ticker/?id=90`;

  const response = await fetch(url);
  const data = await response.json()

  const massageData = data.map((coin: Tickers) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    priceUSD: coin.price_usd,
    priceBTC: coin.price_btc,
    marketCapUsd: coin.market_cap_usd,
    percentChange1h: coin.percent_change_1h,
    percentChange24h: coin.percent_change_24h,
    percentChange7d: coin.percent_change_7d,
    volume24: coin.volume24,

  }))

  return massageData;
}

export const getSocialStats = async (id: string) => {
  const url = `https://api.coinlore.net/api/coin/social_stats/?id=${id}`

  const response = await fetch(url);
  const data = await response.json();

  const massageData = {
    reddit: data.reddit.subscribers,
    twitter: data.twitter.followers_count
  }

  return massageData
}