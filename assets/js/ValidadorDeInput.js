// ValidadorDeInput.js

export default class ValidadorDeInput {
    constructor(inputElement) {
      this.inputElement = inputElement;
    }
  
    validar() {
      const valor = this.inputElement.value; // Obtener el valor del input
      if (valor === "" || valor.trim() === "") {
        return false; // Devolver falso si el valor está vacío o contiene solo espacios en blanco
      }
      return true; // Devolver verdadero si el valor no está vacío ni contiene solo espacios en blanco
    }
  }
  