function verifica() {
  var t1 = document.getElementById("txtn1");
  var t2 = document.getElementById("txtn2");

  var txtn1 = Number(t1.value);
  var txtn2 = Number(t2.value);

  var a = document.querySelector("div#res");
  var ver = Math.max(txtn1, txtn2);
  var Test = ver % 2 == 0 ? "Par" : "Impar";

  a.innerHTML = `O maior numero é: <strong>${ver}</strong> e ele é <strong>${Test}</strong> `;
}
