# NFT Minting Dapp Summary

This minting Dapp was created by following this tutorial: 
https://www.youtube.com/watch?v=ynFNLBP2TPs

In order to make this work, you need to have some artwork created, as well as .json files. 
For this project, they are hosted on fleek. 

Ex: 
https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/0.json

You can see examples of Images, corresponding JSON files, and the naming convention / order for them in IMG Samples.

* 0.png
* 0.json
* 1.png
* 1.json

This is done so that a variable called BaseTokenURI can be set in a function setBaseTokenURI 

In this case, the setBaseTokenURI is: 

https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/

The contract sequences .json files to attach to each NFT following the end of the BaseTokenURI.

The .png files are referred to within the .json files.

More details for NFT metadata here: 

https://docs.opensea.io/docs/metadata-standards

.:. 

The SRC folder contains all of the react | js | css files for the minting dapp.
The Contract folder contains a single solidity contract. 
The Scripts folder contains a deploy script -- and is currently set to Goerli Testnet.

These were built by following the youtube tutorial.

.:. 

You will need to create a .env file.

The .env files store the variables that are called in the deploy.js script and referred to in hardhat.config file. 

.env will store your: 

* Alchemy API Key for goerli [https://dashboard.alchemyapi.io/
* private key for your deployer wallet
* your etherscan API key.

.:. 

This style of minter is one where someone calls a Mint() and the next json file in sequence gets attached to that NFT.
There are a max number of NFTs that can be minted in the set.
There is a mint price which is set both in the contract, and also in the mainmint.js component.
There is a max number of mints which can be called by one wallet. 

These are all set in the contract.

This is set for a collection of 69 NFTs.
