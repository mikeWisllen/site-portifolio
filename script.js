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

  const response = await fetch('https://your-vercel-domain.vercel.app/api/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData),
  });

  const result = await response.json();
  alert(result.message);
}

document.querySelector('form').addEventListener('submit', handleSubmit);







    