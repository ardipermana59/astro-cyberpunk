---
title: "Getting Started with Web3 Development"
date: "2025-08-30"
tags: ["web3", "blockchain", "ethereum", "solidity"]
image: "/assets/blog/placeholder-blog.svg"
summary: "A comprehensive guide to getting started with Web3 development, from setting up your environment to deploying your first smart contract."
---

## Introduction to Web3

Web3 represents the next evolution of the internet—a decentralized web powered by blockchain technology. Unlike Web2, where data is stored on centralized servers, Web3 applications (dApps) run on decentralized networks.

## Why Web3?

- **Decentralization**: No single point of failure
- **Transparency**: All transactions are public and verifiable
- **Security**: Cryptographically secured
- **Ownership**: Users own their data and digital assets
- **Permissionless**: Anyone can participate

## Essential Concepts

### 1. Blockchain
A distributed ledger that records transactions across multiple computers.

### 2. Smart Contracts
Self-executing contracts with the terms directly written into code.

### 3. Wallets
Digital wallets store cryptocurrencies and interact with dApps (e.g., MetaMask).

### 4. Gas Fees
Transaction costs paid to miners/validators for processing transactions.

### 5. Tokens
Digital assets that can represent anything from currency to ownership rights.

## Setting Up Your Development Environment

### Install Node.js
```bash
# Check if Node.js is installed
node --version

# Install using nvm (recommended)
nvm install node
```

### Install Hardhat
Hardhat is a development environment for Ethereum.

```bash
npm install --save-dev hardhat
npx hardhat init
```

### Install MetaMask
Download the MetaMask browser extension from [metamask.io](https://metamask.io).

## Your First Smart Contract

Let's create a simple smart contract in Solidity.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedData;

    event DataStored(uint256 data);

    function set(uint256 x) public {
        storedData = x;
        emit DataStored(x);
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
```

### Deploy Script

```javascript
// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.waitForDeployment();

  console.log("SimpleStorage deployed to:", await simpleStorage.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Deploy to Testnet

```bash
npx hardhat run scripts/deploy.js --network goerli
```

## Building a Frontend

Connect your dApp to the blockchain using ethers.js.

```jsx
import { ethers } from 'ethers';

async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Create provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Get signer
      const signer = await provider.getSigner();

      console.log('Connected:', await signer.getAddress());

      return { provider, signer };
    } catch (error) {
      console.error('User denied account access');
    }
  } else {
    console.error('MetaMask is not installed');
  }
}
```

### Interact with Smart Contract

```jsx
import { ethers } from 'ethers';
import contractABI from './SimpleStorageABI.json';

async function interactWithContract() {
  const { provider, signer } = await connectWallet();

  const contractAddress = '0x...'; // Your deployed contract address
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Write to contract
  const tx = await contract.set(42);
  await tx.wait();
  console.log('Data stored!');

  // Read from contract
  const value = await contract.get();
  console.log('Stored value:', value.toString());
}
```

## Popular Web3 Libraries

### 1. ethers.js
```bash
npm install ethers
```

### 2. Web3.js
```bash
npm install web3
```

### 3. wagmi (React Hooks)
```bash
npm install wagmi viem
```

### 4. RainbowKit (UI Components)
```bash
npm install @rainbow-me/rainbowkit
```

## Testing Smart Contracts

Always test your smart contracts thoroughly!

```javascript
const { expect } = require("chai");

describe("SimpleStorage", function () {
  it("Should store and retrieve value", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.waitForDeployment();

    // Set value to 42
    await simpleStorage.set(42);

    // Get value
    expect(await simpleStorage.get()).to.equal(42);
  });
});
```

Run tests:
```bash
npx hardhat test
```

## Security Best Practices

### 1. Reentrancy Protection
```solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract is ReentrancyGuard {
    function withdraw() public nonReentrant {
        // Withdrawal logic
    }
}
```

### 2. Access Control
```solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function sensitiveFunction() public onlyOwner {
        // Only owner can call this
    }
}
```

### 3. Check-Effects-Interactions Pattern
```solidity
function withdraw() public {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "Insufficient balance");

    // Effects
    balances[msg.sender] = 0;

    // Interactions
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}
```

## Common Pitfalls

1. **Not handling gas limits**
2. **Ignoring integer overflow/underflow**
3. **Exposing private keys**
4. **Not using events for important state changes**
5. **Forgetting to handle transaction failures**

## Resources for Learning

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethereum.org](https://ethereum.org/en/developers/)
- [CryptoZombies](https://cryptozombies.io/)
- [Hardhat Tutorial](https://hardhat.org/tutorial)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

## Conclusion

Web3 development opens up exciting possibilities for building decentralized applications. Start with the basics, experiment with testnets, and always prioritize security. The future of the internet is being built right now—be part of it!

## Next Steps

1. Complete the CryptoZombies tutorial
2. Build a simple token contract
3. Create a dApp with a React frontend
4. Join Web3 developer communities
5. Contribute to open-source Web3 projects

---

Want to collaborate on Web3 projects? Connect with me on [LinkedIn](https://www.linkedin.com/in/ardi-permana-323b19197/) or check out my [blockchain projects](/portfolio).
