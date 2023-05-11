const botao = document.querySelector("#nao");
const some = document.querySelector(".botoes");
const show = document.querySelector("#pergunta");
const msg = document.querySelector("p");

var cont = 0;

botao.addEventListener("mouseover", () => {
  let x = aleatorioX();
  let y = aleatorioY();

  botao.style.transform = `translate(${x}px,${y}px)`;
  cont++;
  if (cont > 10) {
    msg.innerHTML = "aperta logo esse sim ai vai";
  }
  console.log(x, y);
});

function aleatorioY() {
  y = Math.floor(Math.random() * 450);
  return y;
}
function aleatorioX() {
  x = Math.floor(Math.random() * 300);
  return x;
}
function cuzinho() {
  some.style.opacity = "0";
  show.innerHTML =
    "I <br> ____________¶¶¶¶¶¶¶__¶¶__¶¶¶¶¶¶¶<br>__________¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶<br>_________¶¶¶¶______¶¶¶¶¶¶______¶¶¶¶<br>_________¶¶¶¶________¶¶________¶¶¶¶<br>__________¶¶¶____¶¶¶¶¶¶¶¶¶¶____¶¶¶<br>___________¶¶¶¶____¶¶¶¶¶¶____¶¶¶¶<br>_____________¶¶¶¶____¶¶____¶¶¶¶<br>_______________¶¶¶¶______¶¶¶¶<br>_________________¶¶¶¶__¶¶¶¶<br>___________________¶¶¶¶¶¶<br>_____________________¶¶<br> seu cuzinho";
}
