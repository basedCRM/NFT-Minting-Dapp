# NFT Minter

## Summary

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

* Alchemy API Key for goerli  -- https://dashboard.alchemyapi.io/
* private key for your deployer wallet
* your etherscan API key.

.:. 

This style of minter is one where someone calls a Mint() and the next json file in sequence gets attached to that NFT.
There are a max number of NFTs that can be minted in the set.
There is a mint price which is set both in the contract, and also in the mainmint.js component.
There is a max number of mints which can be called by one wallet. 

These are all set in the contract.

This is set for a collection of 69 NFTs.

## Commands

Clone the repo, and setup your .env file. 
Install dependencies outlined in the video.

* npx hardhat clean
* npx hardhat compile
* npx hardhat run scripts/deploy.js --network goerli

You ought to get a deployment address on goerli. 
The deployment address for the testnet for my project is here: 

https://goerli.etherscan.io/address/0x6dF2cc0af3ae6a093A6BB2C575503A208Bc3B2A4

* npx hardhat verify --network goerli 0x6dF2cc0af3ae6a093A6BB2C575503A208Bc3B2A4

The address at the end of the verify command will need to be the address your contract has been deployed to. 

Now your contract ought to be deployed and verified on etherscan, which means, you can connect your metamask to etherscan to call write(). 

Go to Etherscan and set isPublicMintEnabled (bool) to: true

Get your artwork uploaded onto fleek with your .json files, and then, set baseTokenURI (string) to your baseTokenURI.

Next modify the contract address in mainmint.js to reflect the contract address on goerli. 

* npm start run

Will initiate your localhost:3000 server, which runs the minter locally, but still allows you to interact with the goerli contract. 

Test to see if you can mint -- if the minted NFTs show up in your wallet on Etherscan. 

You can also look here: 

https://goerli.pixxiti.com/

.:.

## Deployment // Site Hosting

