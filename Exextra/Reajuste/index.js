function Reajust() {
  var t1 = document.getElementById("txtsalario");
  var txt1 = Number(t1.value);
  var a = document.querySelector("div#res");

  var aum = txt1 * 0.3;
  var salF = aum + txt1;

  a.innerHTML = `Seu salário atual é: ${txt1.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}, e seu salário com aumento é ${salF.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })} `;
}
