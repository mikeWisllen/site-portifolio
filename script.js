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


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('https://api-drab-nu-62.vercel.app/api/server', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const btnEnviar = document.querySelector('.btn-enviar');
          btnEnviar.innerHTML = '<p style="color: #765898; font-weight: bold;">Enviado com sucesso! Redirecionando...</p>';
          
          // Adiciona o link do CSS dinamicamente como solicitado
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'thank.css';
          document.head.appendChild(link);

          setTimeout(() => {
            window.location.href = 'obrigado.html';
          }, 1500);
        } else {
          window.location.href = 'erro.html';
        }
      } catch (error) {
        console.error(error);
        window.location.href = 'erro.html';
      }
    });
    