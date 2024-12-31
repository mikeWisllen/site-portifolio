const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Configuração do Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para processar o envio do formulário
app.post("/send-email", async (req, res) => {
    const { name, email, celular, mensagem } = req.body;

    // Configurar destinatário e assunto
    const para = "mikewisllen@gmail.com";
    const assunto = "Fale Comigo - Contato";

    // Corpo do e-mail
    const corpo = `
        Nome: ${name}
        E-mail: ${email}
        Celular: ${celular}
        Mensagem: ${mensagem}
    `;

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
        host: "mikewisllen.com", // Substituir pelo host SMTP do seu provedor
        port: 587, // Porta SMTP
        secure: false, // false para TLS, true para SSL
        auth: {
            user: "mikewisllen@hotmail.com", // Seu e-mail
            pass: "tomecavalo" // Sua senha
        }
    });

    try {
        // Enviar o e-mail
        await transporter.sendMail({
            from: "mikewisllen@gmail.com", // Remetente
            to: para, // Destinatário
            replyTo: email, // Responder para
            subject: assunto, // Assunto
            text: corpo, // Corpo do e-mail
        });

        res.status(200).send("E-mail enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        res.status(500).send("Houve um erro ao enviar o email!");
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
