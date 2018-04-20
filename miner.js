const CoinImp = require('coin-imp-free');

(async () => {
  // Create miner
  const miner = await CoinImp(process.env.SITE_KEY); // CoinImp's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
      Hashes per second: ${data.hashesPerSecond}
      Total hashes: ${data.totalHashes}
      Accepted hashes: ${data.acceptedHashes}
    `)
  )
})();
