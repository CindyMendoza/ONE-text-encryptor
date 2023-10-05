import ValidadorDeInput from "./ValidadorDeInput.js";

const inputText = document.getElementById("inputText");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDecrypt = document.getElementById("buttonDecrypt");
const buttonCopy = document.getElementById("buttonCopy");
const divMsj = document.getElementById("divMsj");
const msjError =
  "Ningún mensaje fue encontrado, ingresa el texto que desees encriptar o desencriptar.";

const charMap = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

buttonCopy.style.display = "none";
divMsj.textContent = msjError;

const validador = new ValidadorDeInput(inputText);

function encryptText(text) {
  for (const key in charMap) {
    if (text.includes(key)) {
      text = text.replaceAll(key, charMap[key]);
    }
  }
  return text;
}

function decryptText(text) {
  for (const key in charMap) {
    if (text.includes(charMap[key])) {
      text = text.replaceAll(charMap[key], key);
    }
  }
  return text;
}

buttonEncrypt.addEventListener("click", function () {
  if (validador.validar()) {
    const userInput = inputText.value.toLowerCase();
    if (/^[a-z]*$/.test(userInput)) {
      divMsj.textContent = encryptText(userInput);
      buttonCopy.style.display = "inline-block";
    } else {
      divMsj.textContent = "Solo letras minúsculas y sin acentos.";
    }
  } else {
    divMsj.textContent = msjError;
  }
});

buttonDecrypt.addEventListener("click", function () {
  if (validador.validar()) {
    divMsj.textContent = decryptText(inputText.value);
  }
});

buttonCopy.addEventListener("click", function () {
  const textToCopy = divMsj.textContent;
  try {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("¡Texto copiado al portapapeles correctamente!");
        divMsj.textContent = "¡Texto Copiado!";
      })
      .catch((error) => {
        console.error("No se pudo copiar el texto: ", error);
      });
  } catch (err) {
    console.error("Error al intentar copiar el texto: ", err);
  }
});
