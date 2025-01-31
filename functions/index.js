const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
const emailValidator = require("email-validator");

const htmlBuilder = require("./htmlBuilder");

const app = express();

app.use(cors({ origin: true }));

const sender = {
    email: '',
    pass: ''
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender.email,
        pass: sender.pass
    }
});

app.post('/', async (req, res) => {
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
            html: htmlBuilder(code),
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