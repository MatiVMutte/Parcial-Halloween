document.addEventListener('DOMContentLoaded', async function() {
    const URL = "http://localhost:3000/monstruos";
    const contenedorTarjetas = document.querySelector('.principal-tarjetas-monstruos');

    try {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
        const res = await fetch(URL);

        if(!res.ok) {
          throw Error(res);
        }

        const data = await res.json();

        console.log(data);
        data.forEach((monstruo, index) => {
          const tarjeta = document.createElement('div');
          tarjeta.classList.add('tarjeta');
      
          const header = document.createElement('div');
          header.classList.add('tarjeta-header');
          const titulo = document.createElement('h2');
          titulo.textContent = `MONSTRUO N°${index + 1}`;
          header.appendChild(titulo);
      
          const body = document.createElement('div');
          body.classList.add('tarjeta-body');
          const contenidoTarjeta = `
            <p>Nombre: ${monstruo.nombre}</p>
            <p>Alias: ${monstruo.alias}</p>
            <p>Defensa: ${monstruo.defensa}</p>
            <p>Miedo: ${monstruo.miedo}</p>
            <p>Tipo: ${monstruo.tipo}</p>
          `;
          body.innerHTML = contenidoTarjeta;
      
          tarjeta.appendChild(header);
          tarjeta.appendChild(body);
          contenedorTarjetas.appendChild(tarjeta);
        });
    } catch (res) {
      console.error(`Error ${res.status}: ${res.statusText}`);
    } finally {
      spinner.style.display = 'none';
    }
  });