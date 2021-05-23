export function createSocket(symbol, chartInterval) {
  return new WebSocket(
    'wss://stream.binance.com:9443/ws/' +
      symbol.toLowerCase() +
      `@kline_${chartInterval}`
  );
}
