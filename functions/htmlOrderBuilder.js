module.exports = (order) => {
    // Extract the products list to create the product items HTML
    const productsHtml = order.products.map(product => `
        <tr>
            <td align="left" class="es-p10t es-p10b" style="border-bottom:1px solid #cccccc;">
                <p>${product.title}</p>
            </td>
            <td align="center" class="es-p10t es-p10b" style="border-bottom:1px solid #cccccc;">
                <p>${product.quantity}</p>
            </td>
        </tr>
    `).join('');

    // Format date to Brazilian format (dd/MM/yyyy HH:mm)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const formattedDate = formatDate(order.createdAt);

    return `
    <!doctype html>
        <html ⚡4email data-css-strict>
        <head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script>
        
        <style amp-custom>
        u + .body img ~ div div {
            display:none;
        }
        span.MsoHyperlink, span.MsoHyperlinkFollowed {
            color:inherit;
        }
        a.es-button {
            text-decoration:none;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
        }
        body {
            width:100%;
            height:100%;
        }
        table {
            border-collapse:collapse;
            border-spacing:0px;
        }
        table td, body, .es-wrapper {
            padding:0;
            Margin:0;
        }
        .es-content, .es-header, .es-footer {
            width:100%;
            table-layout:fixed;
        }
        p, hr {
            Margin:0;
        }
        h1, h2, h3, h4, h5, h6 {
            Margin:0;
            font-family:arial, "helvetica neue", helvetica, sans-serif;
            letter-spacing:0;
        }
        .es-left {
            float:left;
        }
        .es-right {
            float:right;
        }
        .es-menu td {
            border:0;
        }
        .es-menu div {
            vertical-align:middle;
            display:block;
        }
        sub, sup {
            display:inline-block;
            font-size:83%;
            line-height:1;
        }
        sub {
            vertical-align:bottom;
        }
        sup {
            vertical-align:top;
        }
        s {
            text-decoration:line-through;
        }
        ul, ol {
            font-family:arial, "helvetica neue", helvetica, sans-serif;
            padding:0px 0px 0px 40px;
            margin-top:15px;
            margin-bottom:15px;
        }
        ul li {
            color:#333333;
        }
        ol li {
            color:#333333;
        }
        li {
            margin:0px 0px 15px;
            font-size:14px;
        }
        a {
            text-decoration:underline;
        }
        .es-menu td a {
            font-family:arial, "helvetica neue", helvetica, sans-serif;
            text-decoration:none;
            display:block;
        }
        .es-wrapper {
            width:100%;
            height:100%;
        }
        .es-wrapper-color, .es-wrapper {
            background-color:#FAFAFA;
        }
        .es-content-body p, .es-footer-body p, .es-header-body p, .es-infoblock p {
            font-family:arial, "helvetica neue", helvetica, sans-serif;
            line-height:150%;
            letter-spacing:0;
        }
        .es-header {
            background-color:transparent;
        }
        .es-header-body {
            background-color:transparent;
        }
        .es-header-body p {
            color:#333333;
            font-size:14px;
        }
        .es-header-body a {
            color:#666666;
            font-size:14px;
        }
        .es-footer {
            background-color:transparent;
        }
        .es-footer-body {
            background-color:#FFFFFF;
        }
        .es-footer-body p {
            color:#333333;
            font-size:12px;
        }
        .es-footer-body a {
            color:#333333;
            font-size:12px;
        }
        .es-content-body {
            background-color:#FFFFFF;
        }
        .es-content-body p {
            color:#333333;
            font-size:14px;
        }
        .es-content-body a {
            color:#5C68E2;
            font-size:14px;
        }
        .es-infoblock p {
            font-size:12px;
            color:#CCCCCC;
        }
        .es-infoblock a {
            font-size:12px;
            color:#CCCCCC;
        }
        h1 {
            font-size:46px;
            font-style:normal;
            font-weight:bold;
            line-height:120%;
            color:#333333;
        }
        h2 {
            font-size:26px;
            font-style:normal;
            font-weight:bold;
            line-height:120%;
            color:#333333;
        }
        h3 {
            font-size:20px;
            font-style:normal;
            font-weight:bold;
            line-height:120%;
            color:#333333;
        }
        h4 {
            font-size:24px;
            font-style:normal;
            font-weight:normal;
            line-height:120%;
            color:#333333;
        }
        h5 {
            font-size:20px;
            font-style:normal;
            font-weight:normal;
            line-height:120%;
            color:#333333;
        }
        h6 {
            font-size:16px;
            font-style:normal;
            font-weight:normal;
            line-height:120%;
            color:#333333;
        }
        .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {
            font-size:46px;
        }
        .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {
            font-size:26px;
        }
        .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {
            font-size:20px;
        }
        .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a {
            font-size:24px;
        }
        .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a {
            font-size:20px;
        }
        .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a {
            font-size:16px;
        }
        a.es-button, button.es-button {
            padding:10px 30px 10px 30px;
            display:inline-block;
            background:#5C68E2;
            border-radius:0px 0px 0px 0px;
            font-size:20px;
            font-family:arial, "helvetica neue", helvetica, sans-serif;
            font-weight:normal;
            font-style:normal;
            line-height:120%;
            color:#FFFFFF;
            text-decoration:none;
            width:auto;
            text-align:center;
            letter-spacing:0;
        }
        .es-button-border {
            border-style:solid;
            border-color:#2CB543 #2CB543 #2CB543 #2CB543;
            background:#5C68E2;
            border-width:0px 0px 0px 0px;
            display:inline-block;
            border-radius:0px 0px 0px 0px;
            width:auto;
        }
        .es-button img {
            display:inline-block;
            vertical-align:middle;
        }
        .es-fw, .es-fw .es-button {
            display:block;
        }
        .es-il, .es-il .es-button {
            display:inline-block;
        }
        .es-text-rtl h1, .es-text-rtl h2, .es-text-rtl h3, .es-text-rtl h4, .es-text-rtl h5, .es-text-rtl h6, .es-text-rtl input, .es-text-rtl label, .es-text-rtl textarea, .es-text-rtl p, .es-text-rtl ol, .es-text-rtl ul, .es-text-rtl .es-menu a, .es-text-rtl .es-table {
            direction:rtl;
        }
        .es-text-ltr h1, .es-text-ltr h2, .es-text-ltr h3, .es-text-ltr h4, .es-text-ltr h5, .es-text-ltr h6, .es-text-ltr input, .es-text-ltr label, .es-text-ltr textarea, .es-text-ltr p, .es-text-ltr ol, .es-text-ltr ul, .es-text-ltr .es-menu a, .es-text-ltr .es-table {
            direction:ltr;
        }
        .es-text-rtl ol, .es-text-rtl ul {
            padding:0px 40px 0px 0px;
        }
        .es-text-ltr ul, .es-text-ltr ol {
            padding:0px 0px 0px 40px;
        }
        .es-p30t {
            padding-top:30px;
        }
        .es-p20r {
            padding-right:20px;
        }
        .es-p10b {
            padding-bottom:10px;
        }
        .es-p20l {
            padding-left:20px;
        }
        .es-p10t {
            padding-top:10px;
        }
        .es-p20t {
            padding-top:20px;
        }
        .es-p20b {
            padding-bottom:20px;
        }
        .es-p30b {
            padding-bottom:30px;
        }
        .es-p-default {
            padding-top:20px;
            padding-right:20px;
            padding-left:20px;
        }
        .es-menu amp-img, .es-button amp-img {
            vertical-align:middle;
        }
        @media only screen and (max-width:600px) {.es-p-default { } *[class="gmail-fix"] { display:none } p, a { line-height:150% } h1, h1 a { line-height:120% } h2, h2 a { line-height:120% } h3, h3 a { line-height:120% } h4, h4 a { line-height:120% } h5, h5 a { line-height:120% } h6, h6 a { line-height:120% } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:36px; text-align:left } h2 { font-size:26px; text-align:left } h3 { font-size:20px; text-align:left } h4 { font-size:24px; text-align:left } h5 { font-size:20px; text-align:left } h6 { font-size:16px; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px } .es-menu td a { font-size:12px } .es-header-body p, .es-header-body a { font-size:14px } .es-content-body p, .es-content-body a { font-size:16px } .es-footer-body p, .es-footer-body a { font-size:14px } .es-infoblock p, .es-infoblock a { font-size:12px } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0; font-size:0; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px; padding:10px 20px 10px 20px; line-height:120% } a.es-button, button.es-button, .es-button-border { display:inline-block } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block } .es-adaptive table, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .adapt-img { width:100%; height:auto } .es-mobile-hidden, .es-hidden { display:none } .es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } .h-auto { height:auto } }
        </style>
        </head>
        <body class="body">
        <div dir="ltr" class="es-wrapper-color" lang="pt">
        <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#fafafa"></v:fill>
                    </v:background>
                <![endif]-->
        <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
            <tr>
            <td valign="top">
            <table cellpadding="0" cellspacing="0" align="center" class="es-content">
            </table>
            <table cellpadding="0" cellspacing="0" align="center" class="es-header">
            </table>
            <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tr>
                <td align="center">
                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-content-body">
                    <tr>
                    <td align="left" class="es-p30t es-p10b es-p20r es-p20l">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                        <td width="560" align="center" valign="top">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                            <td align="center" class="es-p10t es-p10b" style="font-size:0px"><img src="https://firebasestorage.googleapis.com/v0/b/furvana-ecommerce.firebasestorage.app/o/logo.png?alt=media&token=68339e66-0aab-4f66-b943-63592a3d0b08" alt="" width="160" class="adapt-img" style="display:block; margin-bottom: 20px;" height="30" layout="responsive"></img></td>
                            </tr>
                            <tr>
                            <td align="center" class="es-p10b"><h1 class="es-m-txt-c" style="font-size:46px;line-height:46px">Confirmação de Pedido</h1></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table></td>
                    </tr>
                    <tr>
                    <td align="left" class="es-p10t es-p10b es-p20r es-p20l">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                        <td width="560" align="center" valign="top">
                        <table cellpadding="0" cellspacing="0" width="100%" style="border-left:2px solid #cccccc;border-right:2px solid #cccccc;border-top:2px solid #cccccc;border-bottom:2px solid #cccccc;border-radius:5px;border-collapse:separate">
                            <tr>
                            <td align="center" class="es-p20t es-p20r es-p20l"><h2 class="es-m-txt-c">Detalhes do Pedido</h2></td>
                            </tr>
                            <tr>
                            <td align="left" class="es-p20t es-p20b es-p20r es-p20l">
                                <h3>Status do Pedido: <span style="color:#5C68E2">${order.status}</span></h3>
                                <div style="margin-top: 20px;">
                                    <h3>Informações do Pedido</h3>
                                    <p><strong>Código do Pedido:</strong> ${order.id}</p>
                                    <p><strong>Data do Pedido:</strong> ${formattedDate}</p>
                                </div>
                                <div style="margin-top: 20px;">
                                    <h3>Informações do Cliente</h3>
                                    <p><strong>Nome:</strong> ${order.shipping.nome} ${order.shipping.sobrenome}</p>
                                    <p><strong>Email:</strong> ${order.shipping.email}</p>
                                    <p><strong>Telefone:</strong> ${order.shipping.telefone}</p>
                                    <p><strong>CPF:</strong> ${order.shipping.cpf}</p>
                                </div>
                                
                                <div style="margin-top: 20px;">
                                    <h3>Endereço de Entrega</h3>
                                    <p>${order.shipping.endereco}, ${order.shipping.numero}</p>
                                    <p>${order.shipping.bairro}, ${order.shipping.complemento ? order.shipping.complemento : ''}</p>
                                    <p>${order.shipping.cidade} - ${order.shipping.estado.sigla}, ${order.shipping.cep}</p>
                                </div>
                                
                                <div style="margin-top: 20px;">
                                    <h3>Detalhes do Pagamento</h3>
                                    <p><strong>Forma de Pagamento:</strong> ${order.paymentMethod}</p>
                                    <p><strong>Valor Total:</strong> R$ ${order.totalPrice}</p>
                                </div>
                                
                                <div style="margin-top: 20px;">
                                    <h3>Produtos</h3>
                                    <table style="width:100%; border-collapse: collapse;">
                                        <tr style="background-color: #f2f2f2;">
                                            <th align="left" style="padding: 10px; border-bottom: 2px solid #cccccc;">Produto</th>
                                            <th align="center" style="padding: 10px; border-bottom: 2px solid #cccccc;">Quantidade</th>
                                        </tr>
                                        ${productsHtml}
                                    </table>
                                </div>
                            </td>
                            </tr>
                        </table></td>
                        </tr>
                    </table></td>
                    </tr>
                    <tr>
                    <td align="left" class="es-p30b es-p20r es-p20l">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                        <td width="560" align="center" valign="top">
                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tr>
                            <td align="center" class="es-p20t">
                                <p>Obrigado por comprar conosco!</p>
                                <p>Para qualquer dúvida sobre seu pedido, entre em contato conosco.</p>
                            </td>
                            </tr>
                        </table></td>
                        </tr>
                    </table></td>
                    </tr>
                </table></td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" align="center" class="es-footer">
                <tr>
                <td align="center">
                    <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                        <td align="center" class="es-p20t es-p20b">
                            <p style="font-size: 12px; color: #666666;">© 2024 Furvana. Todos os direitos reservados.</p>
                        </td>
                        </tr>
                    </table>
                </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" align="center" class="es-content">
            </table></td>
            </tr>
        </table>
        </div>
        </body>
    </html>
    `;
};