const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;
let intervaloFundo = null;
let modoManual = false;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
    intervalo = setInterval(() => {
        contador++;

        console.log("tempo:",contador);
        
        if (contador == 30){
            cria.src = estados.puto;
        }

        if(contador == 60){
            cria.src = estados.morto;
        }

        if (contador >= 60) return;

    }, 1000);
}

controlador();

function alimentar() {

    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

// 🌙 Fundo
const fundoDia = "background.png";
const fundoNoite = "background_noite.png";
let horas = 0;

function atualizarFundo() {

    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {

        if (modoManual) return; // 🔥 trava se estiver no modo manual

        horas++;

        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }

        if (horas >= 24) horas = 0;

    }, 1000);
}

atualizarFundo();

// 🔘 Botão manual
function trocarFundo() {

    modoManual = true; // 🔥 ativa modo manual

    if (document.body.style.backgroundImage.includes("background.png")) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
}

function mostrarFerlini() {
    const img = document.getElementById("ferlini");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}
img.style.display = "block";
img.style.opacity = 0;

setTimeout(() => {
    img.style.transition = "0.5s";
    img.style.opacity = 1;
}, 10);
alert("Você encontrou o Gostosinho 😏");