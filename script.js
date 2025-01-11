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
    
      // Cria um objeto FormData com os dados do formulário
      const data = new FormData(event.target);
      
      // Converte FormData para um objeto JSON
      const jsonData = Object.fromEntries(data.entries());
    
      // Envia os dados como uma requisição POST para a API
      try {
        const response = await fetch('https://site-portifolio-rose.vercel.app/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        });
    
        // Verifica se a resposta da API foi bem-sucedida
        if (response.ok) {
          const result = await response.json();
          alert(result.message); // Exibe mensagem de sucesso
        } else {
          const error = await response.json();
          alert(error.error); // Exibe mensagem de erro
        }
      } catch (error) {
        // Exibe um erro no caso de falha na requisição
        console.error('Erro ao enviar o formulário:', error);
        alert('Erro ao enviar o formulário. Tente novamente.');
      }
    }
    
    // Adiciona o ouvinte de evento ao formulário
    document.querySelector('form').addEventListener('submit', handleSubmit);
    
      
