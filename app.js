document.getElementById('syncButton').addEventListener('click', async () => {
    console.log('Syncing Helios...');

    const checkpoint = document.getElementById('checkpointInput').value;
    const config = {
        // TODO: This is my personal Alchemy key, inject via GitHub Actions
        executionRpc: "https://eth-mainnet.g.alchemy.com/v2/Aj5RHrooceIbmkhMmdratqUaB_KSx1Oo",
        consensusRpc: "https://www.lightclientdata.org",
        checkpoint: checkpoint,
    };

    const heliosProvider = await helios.createHeliosProvider(config);

    const startTime = Date.now();

    await heliosProvider.sync();
    await heliosProvider.waitSynced();

    const endTime = Date.now();

    console.log(`Synced in ${endTime - startTime}ms`);



    window.provider = new ethers.providers.Web3Provider(heliosProvider);


    const response = await window.provider.send('eth_getBlockByNumber', ['latest', true]);
    console.log(response);
    document.getElementById('latestHeader').innerText = `Latest Block Hash: ${response.hash}`;
    document.getElementById('latestTimestamp').innerText = `Latest Block Timestamp: ${response.timestamp}`;
});

document.getElementById('findTransactionButton').addEventListener('click', async () => {
    const transactionHash = document.getElementById('transactionInput').value;
    const response = await window.provider.send('eth_getTransactionByHash', [transactionHash]);
    console.log(response);
    document.getElementById('transactionBlockHash').innerText = `Block Hash: ${response.blockHash}`;
});
