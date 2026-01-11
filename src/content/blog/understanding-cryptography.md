---
title: "Understanding Modern Cryptography: A Developer's Guide"
date: "2025-10-10"
tags: ["crypto", "security", "tutorial"]
image: "/assets/blog/placeholder-blog.svg"
summary: "An introduction to modern encryption methods, hashing algorithms, and best practices for implementing cryptography in web applications."
---

## Introduction

Cryptography is the backbone of modern digital security. Whether you're building a simple login system or a complex blockchain application, understanding cryptographic principles is essential for every developer.

## What is Cryptography?

Cryptography is the practice of securing information by transforming it into an unreadable format. Only those with the correct key can decrypt and access the original information.

### Types of Cryptography

1. **Symmetric Encryption**: Same key for encryption and decryption
2. **Asymmetric Encryption**: Public key for encryption, private key for decryption
3. **Hash Functions**: One-way transformation of data

## Common Algorithms

### AES (Advanced Encryption Standard)

AES is the gold standard for symmetric encryption. It's fast, secure, and widely supported.

```javascript
const crypto = require('crypto');

function encryptAES(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex')
  };
}
```

### RSA (Rivest-Shamir-Adleman)

RSA is used for asymmetric encryption, perfect for secure key exchange.

```javascript
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

// Generate key pair
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Encrypt with public key
const encrypted = publicEncrypt(publicKey, Buffer.from('Secret message'));

// Decrypt with private key
const decrypted = privateDecrypt(privateKey, encrypted);
```

### SHA-256 (Secure Hash Algorithm)

SHA-256 is a cryptographic hash function commonly used for data integrity verification.

```javascript
const crypto = require('crypto');

function hashSHA256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

console.log(hashSHA256('Hello World'));
// Output: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```

## Best Practices

### 1. Never Roll Your Own Crypto

Always use well-tested, standard libraries. Creating custom cryptographic algorithms is extremely risky.

### 2. Proper Key Management

- Use environment variables for keys
- Rotate keys regularly
- Never hardcode keys in source code
- Use Key Management Services (KMS)

### 3. Salt Your Hashes

When hashing passwords, always use a unique salt for each password.

```javascript
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
```

### 4. Use HTTPS

Always transmit sensitive data over HTTPS to prevent man-in-the-middle attacks.

### 5. Implement Rate Limiting

Protect against brute force attacks by implementing rate limiting on authentication endpoints.

## Common Pitfalls

### ❌ Using Weak Algorithms
```javascript
// DON'T DO THIS
const hash = crypto.createHash('md5').update(password).digest('hex');
```

### ✅ Use Strong Algorithms
```javascript
// DO THIS
const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
// Or better, use bcrypt
```

### ❌ Storing Passwords in Plain Text
```javascript
// NEVER DO THIS
const user = {
  username: 'john',
  password: 'password123'
};
```

### ✅ Hash Passwords
```javascript
// ALWAYS DO THIS
const user = {
  username: 'john',
  passwordHash: await bcrypt.hash('password123', 10)
};
```

## Real-World Applications

### 1. User Authentication
Use bcrypt or Argon2 for password hashing.

### 2. Data Encryption
Use AES-256 for encrypting sensitive data at rest.

### 3. Secure Communication
Use TLS/SSL for encrypting data in transit.

### 4. Digital Signatures
Use RSA or ECDSA for verifying message authenticity.

### 5. Blockchain
Use SHA-256 and elliptic curve cryptography for blockchain applications.

## Tools and Libraries

### Node.js
- `crypto` (built-in)
- `bcrypt`
- `jsonwebtoken`

### Python
- `cryptography`
- `hashlib`
- `PyNaCl`

### Go
- `crypto` package
- `golang.org/x/crypto`

## Conclusion

Understanding cryptography is crucial for building secure applications. Start with the basics, use established libraries, and always follow best practices. Remember: security is not an afterthought—it should be built into your application from the ground up.

## Further Reading

- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [Crypto 101](https://www.crypto101.io/)
- [Applied Cryptography by Bruce Schneier](https://www.schneier.com/books/applied-cryptography/)

---

Got questions about cryptography? Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/ardi-permana-323b19197/) or check out my [security projects](/portfolio).
