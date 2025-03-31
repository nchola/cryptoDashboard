
import React from 'react';

const CryptoChart = () => {
  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Bitcoin Price</h2>
      </div>
      <div className="h-[400px] w-full rounded-md overflow-hidden">
        <iframe
          title="TradingView Widget"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE%3ABTCUSDT&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=exchange&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default CryptoChart;
