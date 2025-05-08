const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
const emailValidator = require("email-validator");

require('dotenv').config();

const htmlOtpBuilder = require("./htmlOtpBuilder");
const htmlOrderBuilder = require("./htmlOrderBuilder");

if (!process.env.EMAIL_SENDER || !process.env.EMAIL_PASSWORD) {
    logger.error("Missing email credentials in environment variables. Please set EMAIL_SENDER and EMAIL_PASSWORD in your .env file.");
    throw new Error("Missing email credentials. Check your .env file.");
}

const app = express();

app.use(cors({ origin: true }));

const sender = {
    email: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender.email,
        pass: sender.pass
    }
});

// Verify transport configuration is working
transporter.verify((error, success) => {
    if (error) {
        logger.error("SMTP connection error: ", error);
    } else {
        logger.info("SMTP server is ready to send emails");
    }
});

app.post('/otp', async (req, res) => {
    try {
        const { recipient, code } = req.body;

        if (!recipient || !code) {
            let message = "Recipient and code are required";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (!emailValidator.validate(recipient)) {
            let message = "Invalid email format";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (typeof code !== 'string' || code.trim() === '') {
            let message = "Invalid code format";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        const plainText = `Seu código é: ${code}`;

        const mailOptions = {
            from: sender.email,
            to: recipient,
            subject: `Código de validação de email: ${code}`,
            text: plainText,
            html: htmlOtpBuilder(code),
        };

        await transporter.sendMail(mailOptions);


        res.json({ message: "Ok" });
    } catch (error) {
        let message = "Error sending email:" + error.message;

        console.error(message);
        res.status(500).json({ error: message });
    }
});

app.post('/order', async (req, res) => {
    try {
        const { order } = req.body;

        if (!order) {
            let message = "Invalid order format";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (!order.id) {
            let message = "Missing order ID";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (!order.createdAt) {
            let message = "Missing order creation date";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (!order.shipping || !order.shipping.email) {
            let message = "Missing shipping or email information";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        if (!emailValidator.validate(order.shipping.email)) {
            let message = "Invalid email format";

            logger.error(message);
            return res.status(400).json({ error: message });
        }

        // Create plain text version
        const plainText = `
            Confirmação de Pedido
            
            
            Status do Pedido: ${order.status}
            Código do Pedido: ${order.id}

            Informações do Cliente:
            Nome: ${order.shipping.nome} ${order.shipping.sobrenome}
            Email: ${order.shipping.email}
            Telefone: ${order.shipping.telefone}
            CPF: ${order.shipping.cpf}
            
            Endereço de Entrega:
            ${order.shipping.endereco}, ${order.shipping.numero}
            ${order.shipping.bairro}, ${order.shipping.complemento ? order.shipping.complemento : ''}
            ${order.shipping.cidade} - ${order.shipping.estado}, ${order.shipping.cep}
            
            Forma de Pagamento: ${order.paymentMethod}
            Valor do Frete: R$ ${order.shipping.price}
            Valor Total: R$ ${order.totalPrice}
            
            Produtos:
            ${order.products.map(product => `${product.title} - Quantidade: ${product.quantity}`).join('\n')}
            
            Obrigado por comprar conosco!
        `;

        const mailOptions = {
            from: sender.email,
            to: order.shipping.email,
            subject: `Confirmação do Pedido - Furvana`,
            text: plainText,
            html: htmlOrderBuilder(order),
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: "Ok" });
    } catch (error) {
        let message = "Error sending email:" + error.message;

        console.error(message);
        res.status(500).json({ error: message });
    }
});

exports.widgets = onRequest(app);