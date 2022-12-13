const firstName = prompt("informe o seu primeiro nome");
const lastName = prompt("informe o seu sobrenome");
const fieldOfStudy = prompt("Qual é o campo de estuda?");
const yearOfBirth = prompt("Qual é o sua ano de nascimento?");

alert(
  "Você foi cadastrado com suceso! \n" +
    "\nNome completo: " +
    firstName +
    " " +
    lastName +
    "\nCampo de estudo: " +
    fieldOfStudy +
    "\nIdade: " +
    (2022 - yearOfBirth)
);
