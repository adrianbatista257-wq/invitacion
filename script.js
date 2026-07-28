const mensaje = `💜 Feliz cumpleaños, Massiel Cristina Córdoba Martínez.

Hoy quiero desearte un día lleno de felicidad, paz y muchísimas bendiciones.

Espero que Dios siga guiando cada uno de tus pasos y que todos tus sueños se hagan realidad.

Gracias por permitirme compartir contigo momentos especiales. Eres una persona muy importante para mí y deseo de todo corazón que este nuevo año de vida esté lleno de sonrisas, amor, salud y personas que realmente valoren el gran corazón que tienes.

Nunca olvides lo valiosa, fuerte y especial que eres.

Que este cumpleaños marque el inicio de una nueva etapa llena de alegrías y momentos inolvidables.

💜 Feliz cumpleaños, Massiel.

Con mucho cariño,

Adrián 💜`;

const btn = document.getElementById("giftBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const typed = document.getElementById("typed");

btn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    letter.classList.remove("hidden");

    escribirMensaje();

});

function escribirMensaje(){

    let i = 0;

    typed.textContent = "";

    const intervalo = setInterval(()=>{

        typed.textContent += mensaje.charAt(i);

        i++;

        window.scrollTo(0, document.body.scrollHeight);

        if(i >= mensaje.length){

            clearInterval(intervalo);

        }

    },35);

}

/* FLORES */

function crearFlor(){

    const flor = document.createElement("div");

    flor.className = "flower";

    flor.innerHTML = "🌸";

    flor.style.left = Math.random()*100+"vw";

    flor.style.fontSize = (20 + Math.random()*25)+"px";

    flor.style.animationDuration = (6 + Math.random()*6)+"s";

    document.body.appendChild(flor);

    setTimeout(()=>{

        flor.remove();

    },12000);

}

/* CORAZONES */

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.className = "heart";

    corazon.innerHTML = "💜";

    corazon.style.left = Math.random()*100+"vw";

    corazon.style.fontSize = (18 + Math.random()*20)+"px";

    corazon.style.animationDuration = (7 + Math.random()*5)+"s";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },12000);

}

/* PARTÍCULAS */

function crearParticula(){

    const p = document.createElement("div");

    p.className = "spark";

    p.style.left = Math.random()*100+"vw";

    p.style.top = (40 + Math.random()*60)+"vh";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },4000);

}

setInterval(crearFlor,500);

setInterval(crearCorazon,800);

setInterval(crearParticula,250);
