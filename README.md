# 👨‍💻 Portfólio Pessoal - Mike Wisllen

Um site de portfólio pessoal moderno e responsivo, desenvolvido para apresentar habilidades profissionais, projetos e facilitar o contato direto com visitantes.

## 📋 Sobre o Projeto

Este projeto é um portfólio web completo que apresenta:
- **Identificação profissional** com imagem de perfil e descrição pessoal
- **Showcasing de skills** nas áreas de Backend, Redes e HelpDesk
- **Galeria de portfólios** com projetos realizados
- **Formulário de contato** integrado com API backend
- **Design responsivo** para desktop e mobile
- **Navegação intuitiva** com menu mobile adaptativo

## 🎯 Objetivo

Servir como vitrine digital para apresentar competências profissionais em:
- Desenvolvimento Backend (C#, .NET, Node.js, PHP)
- Infraestrutura de Redes e Servidores
- Suporte Técnico (HelpDesk)
- Cloud Computing (AWS)
- Ferramentas de Monitoramento (Zabbix, Grafana)

## 🚀 Funcionalidades

### 1. **Seção de Início (Home)**
- Título principal com animação de digitação
- Chamada à ação para download do CV
- Imagem apresentável do desenvolvedor

### 2. **Skills (Habilidades)**
- 3 cards mostrando especialidades principais
- Ícones visuais para cada área
- Descrições detalhadas de experiências

### 3. **Sobre**
- Apresentação pessoal e profissional
- Informações sobre interesses (tecnologia, games)
- Links para redes sociais (Instagram, LinkedIn, GitHub)

### 4. **Portfólio**
- Galeria de projetos realizados
- Overlays interativos ao passar o mouse
- Categorias de projetos (APIs, Sites, Banco de Dados)

### 5. **Contato**
- Formulário com validação
- Campos: Nome, Email, Celular, Mensagem
- Integração com API backend para recebimento de mensagens
- Feedback visual ao usuário após envio

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript Vanilla** - Interatividade e lógica
- **Typed.js** - Efeito de digitação nas skills
- **Bootstrap Icons** - Ícones escaláveis

### Backend
- **API Vercel** - Processamento de formulários
- Endpoint: `https://api-drab-nu-62.vercel.app/api/server`

### Deployment
- Hospedado em plataforma web (indicado por CNAME)

## 📁 Estrutura do Projeto

```
site-portifolio/
├── index.html           # Página principal
├── obrigado.html        # Página de sucesso (pós-formulário)
├── erro.html            # Página de erro
├── script.js            # Lógica JavaScript principal
├── style.css            # Estilos gerais do site
├── thank.css            # Estilos da página de agradecimento
├── images/              # Pasta de imagens
│   ├── logo2.jpg
│   ├── pessoal.png
│   ├── foto-perfil.png
│   ├── projeto-api.png
│   ├── projeto-site.png
│   └── controller.svg
├── CNAME                # Configuração de domínio customizado
└── README.md            # Este arquivo
```

## 🔄 Fluxo do Formulário de Contato

```
Usuário preenche formulário
         ↓
JavaScript coleta os dados
         ↓
Envia POST para API backend
         ↓
✓ Sucesso → Mostra mensagem e redireciona para obrigado.html
✗ Erro → Redireciona para erro.html
```

## 💻 Como Usar

### Localmente
1. Clone o repositório
   ```bash
   git clone <url-do-repositorio>
   cd site-portifolio
   ```

2. Abra o arquivo `index.html` em um navegador
   ```bash
   # Windows
   start index.html
   
   # Linux/Mac
   open index.html
   ```

### Em Produção
O site está configurado para ser hospedado em um servidor web e pode ser acessado através do domínio customizado configurado no CNAME.

## 🎨 Paleta de Cores

- **Cor Principal**: `#765898` (Roxo)
- **Fundo**: Tons neutros
- **Textos**: Preto e branco com bom contraste

## 📱 Responsividade

O projeto é totalmente responsivo com suporte para:
- **Desktop** - Layout fluido com navegação completa
- **Tablet** - Menu adaptativo
- **Mobile** - Menu sanduíche (mobile menu) com overlay

## ✨ Destaques Técnicos

- **Prevenção de envio padrão** - Formulário com `e.preventDefault()`
- **Async/Await** - Requisições HTTP modernas
- **Validação HTML5** - Campos obrigatórios
- **Menu Mobile Interativo** - Abre/fecha com animação
- **Efeitos de Digitação** - Powered by Typed.js
- **CSS Grid e Flexbox** - Layouts modernos

## 🔗 Links Importantes

- **GitHub**: https://github.com/mikeWisllen
- **LinkedIn**: https://www.linkedin.com/public-profile/settings
- **Instagram**: https://www.instagram.com/mikewisllen/
- **Email**: mikewisllen@gmail.com

## 📝 Próximas Melhorias Sugeridas

- [ ] Sistema de feedback visual melhorado (toast notifications)
- [ ] Validação de email mais robusta
- [ ] Captura de CAPTCHA para evitar spam
- [ ] Página de erro mais detalhada
- [ ] Analytics para rastrear visitas
- [ ] SEO otimizado com meta tags
- [ ] Dark mode toggle

## 📞 Contato

Tem interesse em trabalhar junto? Entre em contato através do formulário no site ou pelos links de redes sociais.

---

**Desenvolvido com ❤️ por Mike Wisllen**
