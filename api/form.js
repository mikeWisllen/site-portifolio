const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, celular, message } = req.body;

    // Validar campos obrigatórios
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, e-mail e mensagem são obrigatórios.' });
    }

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail ou outro serviço
      auth: {
        user: process.env.EMAIL_USER || "mikewisllen@gmail.com", // Usar variáveis de ambiente
        pass: process.env.EMAIL_PASS || "phms nhvm rycr orpi",  // A senha do aplicativo Gmail
      },
    });

    // Configuração do e-mail a ser enviado
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DESTINATION || 'mikewisllen@gmail.com', // Destinatário pode ser uma variável de ambiente
      subject: 'Novo formulário enviado',
      text: JSON.stringify({ name, email, celular, message }, null, 2), // JSON formatado para facilitar a leitura
    };

    try {
      // Enviar o e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error); // Logar erro para facilitar a depuração
      res.status(500).json({ error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`); // Retorna erro para métodos não POST
  }
};
