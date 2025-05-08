# Furvana E-commerce Email Functions

This repository contains Firebase Functions for sending transactional emails for the Furvana E-commerce platform.

## Features

- OTP Email Verification: Sends verification codes via email
- Order Confirmation: Sends order confirmation emails with detailed information

## Setup

### Prerequisites

1. Node.js installed
2. Firebase CLI installed (`npm install -g firebase-tools`)
3. Firebase project created

### Installation

1. Clone the repository
2. Navigate to the functions directory:
   ```
   cd functions
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Environment Configuration

The email service requires environment variables for authentication. There are three ways to set them up:

#### Option 1: Using the setup script (Recommended)

```
node setup-env.js your-email@gmail.com your-password
```

Or run it without arguments to be prompted for the values:

```
node setup-env.js
```

#### Option 2: Manual Firebase config setup

```
firebase functions:config:set email.user="your-email@gmail.com" email.pass="your-password"
```

#### Option 3: Local testing configuration

1. For local testing, create/edit a `.runtimeconfig.json` file in the functions directory:

```json
{
  "email": {
    "user": "your-email@gmail.com",
    "pass": "your-email-password"
  }
}
```

> Note: If you're using Gmail, you may need to create an app password if you have 2FA enabled. See [Google Account Help](https://support.google.com/accounts/answer/185833).

## Deployment

1. After setting up environment variables, deploy the functions:

```
firebase deploy --only functions
```

## Local Testing

To test the functions locally:

```
firebase emulators:start --only functions
```

## API Endpoints

### OTP Verification

```
POST /widgets/otp
Content-Type: application/json

{
  "recipient": "user@example.com",
  "code": "123456"
}
```

### Order Confirmation

```
POST /widgets/order
Content-Type: application/json

{
  "order": {
    "paymentMethod": "Credit Card",
    "shipping": {
      "email": "customer@example.com",
      "telefone": "123456789",
      "nome": "João",
      "sobrenome": "Silva",
      "cpf": "123.456.789-00",
      "endereco": "Rua Example",
      "numero": "123",
      "bairro": "Centro",
      "complemento": "Apto 45",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01234-567",
      "price": "15.90"
    },
    "products": [
      {
        "name": "Product 1",
        "quantity": 2
      },
      {
        "name": "Product 2",
        "quantity": 1
      }
    ],
    "totalPrice": "135.80",
    "status": "Confirmado"
  }
}
``` 