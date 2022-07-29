# NFT Minting Dapp Summary

This minting Dapp was created by following this tutorial: 
https://www.youtube.com/watch?v=ynFNLBP2TPs

In order to make this work, you need to have some artwork created, as well as .json files. 
For this project, they are hosted on fleek. 

Ex: 
https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/0.json

You can see examples of Images, corresponding JSON files, and the naming convention / order for them in the IMG Samples folder. 

.:. 

The SRC folder contains all of the react | js | css files for the site. 

.:. 

The Contract folder contains a single solidity contract. 

.:. 

The hardhat.config and the scripts folder are for deployment - they are currently set to deploy to goerli testnet.

You will need to create a .env file, and run some commands in hardhat to compile | deploy | verify the contract on etherscan. 

.:. 

This style of minter is one where someone calls a Mint() and then there is a sequence for the tokenURI -- which is the address of the .json file listed above. 
