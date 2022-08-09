# NFT Minter [Based.Training No. 1]

Learning web3 skills, and leaving behind repos.

## Summary

This minting Dapp was created by following this tutorial: 
https://www.youtube.com/watch?v=ynFNLBP2TPs

In order to make this work, you need to have some artwork created, as well as .json files. 
For this project, they are hosted on fleek. 

Ex: 
https://storageapi.fleek.co/4f9743ce-d4c0-4c96-8917-d32196fb5396-bucket/Archetypes/0.json

PNG files and JSON files are included in the repo.

All artwork is CC0. 

File structures in the Fleek folder are like so:

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

Xs does not have much in the way of metadata. The primary purpose of this collection was just to study faces, and ship a NFT project with its own minting dapp.

.:. 

The SRC folder contains all of the react | js | css files for the minting dapp.
The Contract folder contains a single solidity contract. 
The Scripts folder contains a deploy script -- and is currently set to Mainnet -- though you can get the Goerli RPC from the Alchemyapi dashboard.

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
There are a max number of NFTs that can be minted in the set -- 69 in this case.
There is a mint price which is set both in the contract, and also in the mainmint.js component -- .05 ETH in this case.
There is a max number of mints which can be called by one transaction -- set to 1.

You'll notice that there are some commented out areas in the mainmint.js file, where it would be possible to have buttons which can increment and decrement the amount of NFTs to be minted at one time. I ran into an issue with the sequencing of the NFTs being minted -- for example, if the network was slow, and some NFTs were minted prior to others, due to batching, or whatever -- if the 7 NFT was minted before the 4 NFT, then, it would not be possible to mint 8. 

Something like "That token has already been minted!" bug came about, and I resolved it by limiting the number of mints to 1 per transaction on the UI, and in the contract. 

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

You can also look here for goerli testnet NFTs:

https://goerli.pixxiti.com/

.:.

## Deployment // Site Hosting

Some of the files that you see in the root directory are the static build version of the website, which you can get by using the following command: 

* run npm build

This creates the contents above in a /build folder, and is called a "static build".

There is a public folder -- it is apparently needed to do this command.

I had no idea how to make the site deployed using fleek and had some difficulty with vercel, so I just hacked at it, and eventually I found that using the settings above. 

I will need to educate myself on this next.

Basically just dumping the contents of the /build folder into the root directory of the github above, and then connecting to vercel and using 'other' type of build, produces a functioning site.

## Comments on Xs

These paintings were done because I enjoyed painting them, and wanted to learn how to create a minting dapp. The artwork is CC0, and you are free to use it however you like. 

As such, there is no Roadmap, and no real "project specific discord" -- though you can follow my discord, as I have more artwork there, as well as updates on whatever I'm doing next. 

The intention for Based.Training, is to have skills that are BASED and to do BASED projects.

Some examples of things I would be interested in doing -- in no particular order: 

* Alchemy API Hackathon Series -- This could help me learn about how to make onchain NFTs, or get more familiar with their API. 
* Scrimba Front End Series -- This could help me make better websites, or not be limited to this style of vercel upload. 
* Whitelist Integration -- Having whitelists or Merkel Airdrops integrated could be an interesting way of reaching out to specific communities, or rewarding previous minters. 
* Supply games -- I have some ideas for supply games for NFTs. 
* Marketing specific ideas -- Such as smaller collections designed for specific groups of people, or fundraising for specific causes.
* Composable NFT ideas -- Working within some pre-existing codebase, and adding my art. 

There are a lot of skills and literacies that I can learn in this area, and I will not be committing to focusing on any one of them right now -- but instead, will try small experiments, and learn as I go, and see how they go. 

I prefer to do small batch projects, more than 10k generative projects, and I reject the idea that you only have one go to make it with NFTs. 

I think an iterative approach, with more skills built between each iteration is interesting, and I would rather do that, and build up a more organic collection of work, and skills and collectors. 

Thanks for reading -- and if you are an artist, and you'd like to fork this project, and design your own -- that is the purpose of this repo.
