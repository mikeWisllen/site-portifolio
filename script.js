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

    // efeito de digitação do topo
    const typedEl = document.querySelector('.typed')
    if (typedEl && window.Typed) {
        new Typed('.typed', {
            strings: typedEl.getAttribute('data-typed-items').split(', '),
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        })
    }

    // destaque do link ativo no menu conforme a seção visível
    const linksMenu = document.querySelectorAll('nav.menu-desktop a[href^="#"]')
    const secoes = document.querySelectorAll('main section[id]')

    const marcarAtivo = () => {
        let atual = ''
        secoes.forEach(secao => {
            if (window.scrollY >= secao.offsetTop - 140) atual = secao.id
        })
        linksMenu.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + atual)
        })
    }

    window.addEventListener('scroll', marcarAtivo, { passive: true })
    marcarAtivo()


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Coleta de dados mais robusta
      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        message: document.getElementById('message').value
      };
  
      try {
        const response = await fetch('https://api-drab-nu-62.vercel.app/api/server', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const btnEnviar = document.querySelector('.btn-enviar');
          if (btnEnviar) {
            btnEnviar.innerHTML = '<p style="color: #765898; font-weight: bold;">Enviado com sucesso! Redirecionando...</p>';
          }

          setTimeout(() => {
            window.location.href = 'obrigado.html';
          }, 1500);
        } else {
          console.error('API retornou erro:', response.status);
          window.location.href = 'erro.html';
        }
      } catch (error) {
        console.error('Erro de rede ou script:', error);
        window.location.href = 'erro.html';
      }
    });
    