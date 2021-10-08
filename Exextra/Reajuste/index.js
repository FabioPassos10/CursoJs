function Reajust() {
  var t1 = document.getElementById("txtsalario");
  var txt1 = Number(t1.value);
  var a = document.querySelector("div#res");

  var aum = txt1 * 0.3;
  var salF = aum + txt1;

  a.innerHTML = `O ${txt1} o aumento é ${salF} `;
}
