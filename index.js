require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extended:true
    })
)
app.use(express.static(__dirname));
app.use(express.json());
const path = require("path");
const ethers = require('ethers');

// // Generate a new Ethereum Wallet
// const wallet = ethers.Wallet.createRandom();

// // Get the private key
// const privateKey = wallet.privateKey;
// console.log('Private Key:', privateKey);

// // Get the Ethereum address
// const ethAddress = wallet.address;
// console.log('Ethereum Address:', ethAddress);


var port = 3000;

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

