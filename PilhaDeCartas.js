let menu = "";
let contador = "";
let baralho = [];
let carta_adicionada = "";
let carta_removida = "";

do {
  menu = prompt(
    "Escolha uma opção abaixo:" +
      "\n" +
      "1. Adicionar uma carta" +
      "\n" +
      "2. Puxar uma carta" +
      "\n" +
      "3. Sair" +
      "\n\n" +
      "Baralho:" +
      "\n" +
      baralho +
      "\n\n" +
      "Quantidade de Cartas: " +
      contador
  );

  if (menu === "1") {
    carta_adicionada = prompt("Qual o nome da carta a ser adicionada?");
    baralho.unshift(carta_adicionada);
    contador++;
  } else if (menu === "2") {
    if (baralho.length > 0) {
      carta_removida = baralho.shift();
      alert(carta_removida + " foi puxada");
      contador--;
    } else if (baralho.length == 0) {
      alert("Essa ação não pode ser realizada");
    }
  }

  if (menu != 1 && menu != 2 && menu != 3) {
    alert("Essa ação não pode ser realizada");
  }
} while (menu != "3");
