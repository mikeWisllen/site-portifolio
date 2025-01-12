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
  event.preventDefault(); // Previne o comportamento padrão do formulário

  const formData = new FormData(event.target);
  const jsonData = Object.fromEntries(formData.entries()); // Converte o FormData para JSON

  try {
    const response = await fetch('https://site-portifolio-rose.vercel.app/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Certifica-se de enviar como JSON
      },
      body: JSON.stringify(jsonData), // Converte os dados para string JSON
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    alert(result.message); // Exibe a mensagem de sucesso ou erro
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
    alert('Erro ao enviar o formulário. Tente novamente.');
  }
}

document.querySelector('form').addEventListener('submit', handleSubmit);






    