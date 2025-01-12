const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Configuração dos cabeçalhos de CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos

  // Tratamento para o método OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Retorna 200 OK para requisições OPTIONS
  }

  if (req.method === 'POST') {
    const { name, email, celular, message } = req.body;

    // Validação de campos obrigatórios
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, e-mail e mensagem são obrigatórios.' });
    }

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuração do e-mail a ser enviado
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DESTINATION,
      subject: 'Novo formulário enviado',
      text: JSON.stringify({ name, email, celular, message }, null, 2),
    };

    try {
      // Envia o e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).json({ error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};
