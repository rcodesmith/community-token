

// scripts/index.js
module.exports = async function main (callback) {
    try {

        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)

        // Set up a Truffle contract, representing our deployed token instance
        const BuilderCommunityToken = artifacts.require('BuilderCommunityToken');
        const bct = await BuilderCommunityToken.deployed();

        const value = await bct.name();
        console.log("name: " + value);

        const symbol = await bct.symbol();
        console.log("symbol: " + symbol);

      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  };
  
  