function IMC() {
  var s1 = "Abaixo do Peso😱";
  var s2 = "Peso Normal 🥳";
  var s3 = "Sobrepeso 🙀 ";
  var s4 = "Obesidade Grau-I 😐";
  var s5 = "Obesidade grau-II 👽";
  var s6 = "Obesidade Mórbida ☠️";

  var peso = document.getElementById("txtPeso");
  var altura = document.getElementById("txtalt");
  var txtpeso = Number(peso.value);
  var txtalt = Number(altura.value);
  var a = document.querySelector("div#res");

  var calc = txtpeso / txtalt ** 2;
  if (calc < 18.5) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong>${s1}</strong>`;
  } else if (calc >= 18.5 && calc <= 24.9) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong> ${s2} </strong> `;
  } else if (calc >= 25 && calc <= 29.9) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong> ${s3} </strong> `;
  } else if (calc >= 30 && calc <= 34.9) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong> ${s4} </strong> `;
  } else if (calc >= 35 && calc <= 39.9) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong>${s5} </strong>`;
  } else if (calc >= 40) {
    a.innerHTML = `Seu IMC é de ${calc.toFixed(
      2
    )} Situação: <strong> ${s6} </strong>`;
  } else {
    a.innerHTML = `Situação invalida`;
  }
}
