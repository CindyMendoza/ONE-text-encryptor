// Obtenemos referencias a los elementos del DOM
const inputText = document.getElementById("inputText");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDecrypt = document.getElementById("buttonDecrypt");
const buttonCopy = document.getElementById("buttonCopy");
const divError = document.getElementById("error");
const divSuccess = document.getElementById("success");

// Inicializamos el botón de copiar como oculto
buttonCopy.style.display = "none";

// Mapeo de caracteres para encriptar/desencriptar
let charMap = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Función para encriptar el texto
function encryptText(text) {
  for (let i = 0; i < charMap.length; i++) {
    if (text.includes(charMap[i][0])) {
      text = text.replaceAll(charMap[i][0], charMap[i][1]);
    }
  }
  return text;
}

// Función para desencriptar el texto
function decryptText(text) {
  for (let i = 0; i < charMap.length; i++) {
    if (text.includes(charMap[i][1])) {
      text = text.replaceAll(charMap[i][1], charMap[i][0]);
    }
  }
  return text;
}

// Evento al hacer clic en el botón de encriptar
buttonEncrypt.addEventListener("click", function () {
  const userInput = inputText.value.toLowerCase();
  // Validamos el texto de entrada
  if (!userInput.match(/^[a-z]*$/)) {
    divError.textContent = "Solo letras minúsculas y sin acentos";
    divError.style.display = "block";
    // Recargamos la página para limpiar el input
    location.reload();
  } else {
    divError.style.display = "none";
    divSuccess.textContent = encryptText(userInput);
    buttonCopy.style.display = "inline-block";
  }
});

// Evento al hacer clic en el botón de desencriptar
buttonDecrypt.addEventListener("click", function () {
  divSuccess.textContent = decryptText(inputText.value);
});

// Evento al hacer clic en el botón de copiar
buttonCopy.addEventListener("click", function () {
  const range = document.createRange();
  range.selectNodeContents(divSuccess);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  // Copiamos el texto al portapapeles
  navigator.clipboard.writeText(selection);
  // Limpiamos el contenido de éxito y mostramos un mensaje de alerta
  divSuccess.textContent = "";
  alert("Texto Copiado");
});
