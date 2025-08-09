<h2 align="center">Serviço de Envio de E-mails - Furvana Ecommerce</h2>

Este repositório contém um serviço independente responsável pelo envio de e-mails automáticos para o Furvana Ecommerce, como confirmação de pedidos e validação de e-mail (OTP).

O serviço utiliza Firebase Functions, Express e Nodemailer para realizar o disparo dos e-mails de forma segura e eficiente.

> Este projeto é apenas um serviço auxiliar. Para acessar o projeto principal do Furvana Ecommerce, visite: [furvana-ecommerce](https://github.com/joaopedrolt/furvana-ecommerce)

## Como funciona

- Recebe requisições HTTP para envio de e-mails de confirmação de pedido e OTP.
- Valida os dados recebidos e dispara o e-mail para o destinatário informado.

## Observações

- As credenciais de envio devem ser configuradas no arquivo `.env` dentro da pasta `functions`.
- Este serviço não contém detalhes de negócio ou interface de usuário, apenas a lógica de envio de e-mails.

---
Para dúvidas ou sugestões, utilize o repositório principal.