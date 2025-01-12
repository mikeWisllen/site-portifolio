  // aplicação da barra lateral mobile
    let btnMenu = document.getElementById('btn-menu')
    let menu = document.getElementById('menu-mobile')
    let overlay = document.getElementById('overlay-menu')

    btnMenu.addEventListener('click', ()=>{
        menu.classList.add('abrir-menu')
    })

    menu.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })

    overlay.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })
    // final da aplicação lateral mobile

// fetch para enviar os dados para back
document.addEventListener('DOMContentLoaded', () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const submitButton = document.querySelector('form#contactForm input[type="submit"]');
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());

    console.log('Dados do formulário:', jsonData); // Verificar os dados coletados

    // Validação no frontend
    if (!jsonData.name || !jsonData.email || !jsonData.message) {
      alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.');
      return;
    }

    try {
      // Desabilita o botão e muda o texto
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.value = 'Enviando...';
      }

      const response = await fetch('https://site-portifolio-rose.vercel.app/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      console.log('Resposta do servidor:', response);

      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Resultado do envio:', result);

      alert(result.message);
      form.reset(); // Limpa o formulário
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Falha ao enviar o formulário. Verifique sua conexão e tente novamente.');
    } finally {
      // Reabilita o botão e restaura o texto
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.value = 'ENVIAR';
      }
    }
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  } else {
    console.error('Formulário com ID "contactForm" não encontrado no DOM.');
  }
});



    