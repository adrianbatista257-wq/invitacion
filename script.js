const btn = document.getElementById("giftBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const hiddenMessage = document.getElementById("message");

btn.addEventListener("click", () => {
    welcome.style.display = "none";
    letter.classList.remove("hidden");

    escribirCarta();
});

function escribirCarta() {
    const texto = hiddenMessage.innerHTML;

    let i = 0;
    typedText.innerHTML = "";

    const intervalo = setInterval(() => {
        typedText.innerHTML = texto.substring(0, i);

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        i++;

        if (i > texto.length) {
            clearInterval(intervalo);
        }
    }, 18);
}

// Partículas
const particles = document.getElementById("particles");

for (let i = 0; i < 70; i++) {
    const p = document.createElement("span");

    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = (3 + Math.random() * 6) + "s";
    p.style.animationDelay = Math.random() * 5 + "s";

    particles.appendChild(p);
}

// Corazones
const hearts = document.getElementById("hearts");

for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");

    h.innerHTML = "💜";
    h.style.position = "absolute";
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = (18 + Math.random() * 22) + "px";
    h.style.animation = `float ${8 + Math.random() * 8}s linear infinite`;
    h.style.animationDelay = Math.random() * 8 + "s";

    hearts.appendChild(h);
}

// Flores
const flowers = document.getElementById("flowers");

const flores = ["🌸", "🌺", "💮"];

for (let i = 0; i < 30; i++) {
    const f = document.createElement("div");

    f.innerHTML = flores[Math.floor(Math.random() * flores.length)];
    f.style.position = "absolute";
    f.style.left = Math.random() * 100 + "%";
    f.style.fontSize = (20 + Math.random() * 18) + "px";
    f.style.animation = `fall ${8 + Math.random() * 8}s linear infinite`;
    f.style.animationDelay = Math.random() * 8 + "s";

    flowers.appendChild(f);
}
