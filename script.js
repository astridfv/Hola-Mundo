function mostrarMensaje() {
  let mensaje = document.getElementById("mensaje-secreto");
  let musicaFondo = document.getElementById("musica-fondo");
  let musicaSecreta = document.getElementById("musica-secreta");

  mensaje.classList.toggle("hidden");

  if (!mensaje.classList.contains("hidden")) {
      musicaFondo.pause();
      musicaFondo.currentTime = 0;
      musicaSecreta.currentTime = 0;
      let playPromise = musicaSecreta.play();
      
      if (playPromise !== undefined) {
          playPromise.catch(error => {
              console.log("Error reproduciendo audio:", error);
          });
      }
  } else {
      musicaSecreta.pause();
      musicaSecreta.currentTime = 0;
      musicaFondo.currentTime = 0;
      let playPromise = musicaFondo.play();
      
      if (playPromise !== undefined) {
          playPromise.catch(error => {
              console.log("Error reproduciendo audio:", error);
          });
      }
  }
}

// CUENTA REGRESIVA ANTES DE QUE APAREZCA EL BOTÓN ⏳
let tiempo = 20;
let cuentaRegresiva = document.getElementById("cuenta-regresiva");

let intervalo = setInterval(() => {
  tiempo--;
  cuentaRegresiva.textContent = `Esperaaa... ${tiempo}`;

  if (tiempo <= 0) {
      clearInterval(intervalo);
      cuentaRegresiva.classList.add("hidden"); // Oculta la cuenta
      document.getElementById("boton-magico").classList.remove("hidden"); // Muestra el botón
  }
}, 1000); // Se actualiza cada 1 segundo

// Reproducir música de fondo al cargar la página
window.addEventListener('load', function() {
    let musicaFondo = document.getElementById("musica-fondo");
    let playPromise = musicaFondo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Si falla la reproducción automática, intentamos con click
            document.addEventListener('click', function() {
                musicaFondo.play().catch(error => {
                    console.log("Error reproduciendo audio:", error);
                });
            }, { once: true });
        });
    }
});

// CREAR CORAZONES FLOTANTES 💖
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💖"; // EMOJI DEL CORAZÓN  
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 y 5 segundos
  document.body.appendChild(corazon);

  setTimeout(() => {
      corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 500); // Crea un corazón cada 0.5 segundos
