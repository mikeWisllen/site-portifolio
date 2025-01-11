const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, celular, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use o serviço ou SMTP de sua escolha
      auth: {
        user: process.env.EMAIL_USER || "mikewisllen@gmail.com", 
        pass: process.env.EMAIL_PASS || "phms nhvm rycr orpi",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mikewisllen@gmail.com',
      subject: 'Novo formulário enviado',
      text: JSON.stringify({ name, email, celular, message }, null, 2),
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
