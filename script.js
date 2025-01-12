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

// Função para manipular o envio do formulário
async function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('input[type="submit"]');
  
  try {
      // Desabilita o botão durante o envio
      if (submitButton) {
          submitButton.value = 'Enviando...';
          submitButton.disabled = true;
      }
      
      const data = new FormData(form);
      const jsonData = Object.fromEntries(data.entries());
      
      // Substitua este URL pelo URL real da sua API na Vercel
      // Exemplo: https://seu-projeto-api.vercel.app/api/form
      const response = await fetch('https://site-portifolio-rose.vercel.app/api/form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(jsonData)
      });
      
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao enviar formulário');
      }
      
      const result = await response.json();
      alert(result.message);
      form.reset();
      
  } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
  } finally {
      // Reabilita o botão após o envio (sucesso ou erro)
      if (submitButton) {
          submitButton.value = 'ENVIAR';
          submitButton.disabled = false;
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (form) {
      form.addEventListener('submit', handleSubmit);
  }
});





    