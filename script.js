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
async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const jsonData = Object.fromEntries(data.entries());

  // Validação no frontend
  document.querySelectorAll('input, textarea').forEach((input) => {
    input.classList.remove('error');
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!jsonData.name || !jsonData.email || !jsonData.message) {
    alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.');
    if (!jsonData.name) document.querySelector('#name').classList.add('error');
    if (!jsonData.email) document.querySelector('#email').classList.add('error');
    if (!jsonData.message) document.querySelector('#message').classList.add('error');
    return;
  }

  if (!emailRegex.test(jsonData.email)) {
    alert('Por favor, insira um e-mail válido.');
    document.querySelector('#email').classList.add('error');
    return;
  }

  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    const response = await fetch('https://site-portifolio-rose.vercel.app/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    alert(result.message);
    window.location.href = 'https://mikewisllen.com.br/obrigado.html';
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
    alert('Falha ao enviar o formulário. Verifique sua conexão e tente novamente.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'ENVIAR';
  }
}

document.querySelector('form').addEventListener('submit', handleSubmit);



    