# NFT Minting Dapp Summary

This minting Dapp was created by following this tutorial: 
https://www.youtube.com/watch?v=ynFNLBP2TPs

In order to make this work, you need to have some artwork created, as well as .json files. 
For this project, they are hosted on fleek. 

Ex: 
https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/0.json

You can see examples of Images, corresponding JSON files, and the naming convention / order for them in the IMG Samples folder. 

* 0.png
* 0.json
* 1.png
* 1.json

This is done so that a variable called BaseTokenURI can be set in a function setBaseTokenURI 

In this case, the setBaseTokenURI is: 

https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/

So that the sequence can move from 0 to 1 to 2 etc. following the end of the BaseTokenURI -- which assigns .json files to each NFT. 

The .png files are referred to within the NFT metadata [the .json files]

More details for NFT metadata here: 

https://docs.opensea.io/docs/metadata-standards

.:. 

The SRC folder contains all of the react | js | css files for the site. 
The Contract folder contains a single solidity contract. 

These were built by following the youtube tutorial.

.:. 

The hardhat.config and the scripts folder are for deployment - they are currently set to deploy to goerli testnet.

You will need to create a .env file, and run some commands in hardhat to compile | deploy | verify the contract on etherscan. 

The .env files store the variables that are called in the deploy.js script and referred to in hardhat.config file. 

.env will store your: 

* Alchemy API Key for goerli [https://dashboard.alchemyapi.io/
* private key for your deployer wallet
* your etherscan API key.

.:. 

This style of minter is one where someone calls a Mint() and then there is a sequence for the tokenURI -- which is the address of the .json file listed above. 

The json file gets attached to that NFT, and there is a max number of NFTs that can be minted in the set, using a mint price which is set both in the contract, and also in the mainmint.js component.

This is set for a collection of 69 NFTs.
