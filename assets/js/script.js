const inputText = document.getElementById("inputText");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDecrypt = document.getElementById("buttonDecrypt");
const buttonCopy = document.getElementById("buttonCopy");
const divError = document.getElementById("error");
const divSuccess = document.getElementById("success");
buttonCopy.style.display = "none";
let arraystringtoencrypt = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
function Encrypt(string) {
  for (let i = 0; i < arraystringtoencrypt.length; i++) {
    if (string.includes(arraystringtoencrypt[i][0])) {
      string = string.replaceAll(
        arraystringtoencrypt[i][0],
        arraystringtoencrypt[i][1]
      );
    }
  }
  return string;
}
function Decrypt(string) {
  for (let i = 0; i < arraystringtoencrypt.length; i++) {
    if (string.includes(arraystringtoencrypt[i][1])) {
      string = string.replaceAll(
        arraystringtoencrypt[i][1],
        arraystringtoencrypt[i][0]
      );
    }
  }
  return string;
}
buttonEncrypt.addEventListener("click", function (e) {
  if (!inputText.value.toLowerCase().match(/^[a-z]*$/)) {
    alert("Solo letras minúsculas y sin acentos");
    location.reload();
    inputText.value = "";
  } else {
    divError.style.display = "none";
    divSuccess.innerHTML = Encrypt(inputText.value);
    buttonCopy.style.display = "inline-block";
  }
});
buttonDecrypt.addEventListener("click", function (e) {
  inputText.value = Decrypt(inputText.value);
  divSuccess.innerHTML = "";
});
buttonCopy.addEventListener("click", function (e) {
  const range = document.createRange();
  range.selectNodeContents(divSuccess);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  navigator.clipboard.writeText(selection);
  console.log(selection);
  divSuccess.value = "";
  alert("Texto Copiado");
});
